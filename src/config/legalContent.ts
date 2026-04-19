import type { BusinessNiche, SiteConfig } from "../types";

export type LegalDocKind = "privacy" | "terms" | "cancellation";

export type LegalSection = {
  title?: string;
  paragraphs: string[];
};

/**
 * Rutas públicas en español (aliases en inglés gestionados en App).
 */
export const LEGAL_ROUTES = {
  privacy: "/privacidad",
  terms: "/terminos",
  cancellation: "/cancelacion",
} as const;

/** Reemplaza marcadores estáticos por valores de `siteConfig`. */
export function interpolateLegalText(raw: string, site: SiteConfig): string {
  return raw
    .replaceAll("[NOMBRE_EMPRESA]", site.business.legalName)
    .replaceAll("[NOMBRE_COMERCIAL]", site.brand.name)
    .replaceAll("[DIRECCION]", site.business.address)
    .replaceAll("[TIEMPO_CANCELACION]", site.business.cancellationPolicy)
    .replaceAll("[EMAIL]", site.contact.email)
    .replaceAll("[TELEFONO]", site.contact.phone);
}

function interpolateSections(sections: LegalSection[], site: SiteConfig): LegalSection[] {
  return sections.map((s) => ({
    ...s,
    paragraphs: s.paragraphs.map((p) => interpolateLegalText(p, site)),
  }));
}

const NICHE_FALLBACK: BusinessNiche = "barberia";

type Library = Record<BusinessNiche, Record<LegalDocKind, LegalSection[]>>;

const LIBRARY: Library = {
  barberia: {
    privacy: [
      {
        paragraphs: [
          "El responsable del tratamiento de los datos personales es [NOMBRE_EMPRESA], con domicilio en [DIRECCION]. A los efectos de esta Política, el nombre comercial bajo el cual opera ante el público es [NOMBRE_COMERCIAL].",
          "Esta política describe cómo recogemos y tratamos los datos que nos facilita a través del sitio web, formularios de contacto, sistemas de reserva en línea y comunicaciones relacionadas con citas en salón de barbería.",
        ],
      },
      {
        title: "1. Datos que podemos recabar",
        paragraphs: [
          "Datos identificativos y de contacto (nombre y apellidos, teléfono, correo electrónico).",
          "Datos relativos a la reserva (fecha, hora, profesional elegido, servicio solicitado, notas opcionales que nos indique).",
          "Historial de citas gestionadas a través de nuestras herramientas digitales.",
          "Contenido del mensaje cuando utiliza formularios de consulta o el chat de ayuda.",
          "Datos técnicos mínimos derivados de la navegación (por ejemplo dirección IP, tipo de navegador y páginas visitadas) cuando resulte necesario por seguridad o funcionamiento legítimo del sitio.",
        ],
      },
      {
        title: "2. Finalidades y base jurídica",
        paragraphs: [
          "Gestionar reservas, confirmaciones, reprogramaciones y comunicaciones operativas relacionadas con su cita.",
          "Atender solicitudes de información remitidas por formulario o correo electrónico.",
          "Enviar recordatorios de cita cuando haya prestado su consentimiento o exista interés legítimo en reducir ausencias, siempre respetando la normativa aplicable en materia de comunicaciones comerciales.",
          "Cumplir obligaciones legales aplicables en materia contable, fiscal o de protección de datos cuando corresponda.",
          "Mejorar la seguridad del sitio y prevenir usos fraudulentos del sistema de reservas.",
        ],
      },
      {
        title: "3. Conservación",
        paragraphs: [
          "Conservaremos los datos el tiempo necesario para cumplir las finalidades anteriores y las obligaciones legales. Los datos asociados a citas podrán conservarse en soporte que permita la acreditación de la relación contractual o la defensa frente a reclamaciones, conforme a plazos generalmente aplicables.",
        ],
      },
      {
        title: "4. Destinatarios y encargados del tratamiento",
        paragraphs: [
          "Podremos recurrir a proveedores que prestan alojamiento web, envío de correos transaccionales, sistemas de pago (si están activados) u otras herramientas de gestión de reservas, formalizando las obligaciones que exige la normativa con quienes accedan a datos en nuestro nombre.",
          "No vendemos listas de clientes ni cedemos sus datos a terceros para su propia mercadotecnia independiente.",
        ],
      },
      {
        title: "5. Derechos del interesado",
        paragraphs: [
          "Puede solicitar acceso, rectificación, supresión, limitación del tratamiento, portabilidad u oposición según corresponda, contactando a [EMAIL] e identificándose de forma razonable. También puede presentar reclamación ante la autoridad de protección de datos competente.",
        ],
      },
    ],
    terms: [
      {
        paragraphs: [
          "Los presentes Términos regulan el acceso y uso del sitio web operado por [NOMBRE_EMPRESA] ([NOMBRE_COMERCIAL]) y la contratación de servicios de barbería y aseo masculino mediante reserva.",
        ],
      },
      {
        title: "1. Uso del sitio",
        paragraphs: [
          "El usuario se compromete a utilizar el sitio de conformidad con la ley y buena fe. Queda prohibido emplear el portal para actividades fraudulentas, introducir malware o sobrecargar sistemas automatizados de reserva.",
        ],
      },
      {
        title: "2. Reservas",
        paragraphs: [
          "La reserva en línea constituye una solicitud firme salvo que se indique lo contrario. La confirmación puede mostrarse en pantalla y/o por correo electrónico según la configuración del sistema.",
          "Los precios, duraciones y disponibilidad publicados son orientativos; el importe definitivo será el vigente en el establecimiento al prestar el servicio, salvo promoción expresa vinculante.",
        ],
      },
      {
        title: "3. Puntualidad y conducta",
        paragraphs: [
          "Se recomienda llegar con antelación. Un retraso considerable puede implicar reducción del servicio o reprogramación para no perjudicar a otros clientes.",
          "Nos reservamos el derecho de denegar el servicio si existiera riesgo para la integridad del personal u otros clientes o incumplimiento manifiesto de normas de higiene razonables.",
        ],
      },
      {
        title: "4. Pagos",
        paragraphs: [
          "Si se ofrecen pagos en línea, se aplicarán las condiciones del pasarela de pago correspondiente. En caso de fraccionamiento o señas, las reglas específicas se comunicarán antes de confirmar la transacción.",
        ],
      },
      {
        title: "5. Limitación de responsabilidad",
        paragraphs: [
          "Salvo que la ley obligue a otro criterio, la responsabilidad por el uso del sitio se limita en la medida permitida a daños directos probados. No garantizamos la ausencia total de interrupciones del servicio en línea.",
          "Las reacciones alérgicas o sensibilidades cutáneas deben ser comunicadas al profesional antes del servicio. [NOMBRE_COMERCIAL] no responde de circunstancias no comunicadas razonablemente.",
        ],
      },
    ],
    cancellation: [
      {
        paragraphs: [
          "[NOMBRE_COMERCIAL], operado por [NOMBRE_EMPRESA], aplica una política de cancelación y cambio de citas coherente con la planificación del salón y el tiempo de otros clientes.",
        ],
      },
      {
        title: "1. Plazo mínimo de aviso",
        paragraphs: [
          "Para cancelar o reprogramar una cita sin penalización aplicable por incumplimiento grave, el cliente debe notificarlo con una antelación mínima de: [TIEMPO_CANCELACION].",
          "Este plazo se cuenta respecto del horario de inicio previsto de la reserva confirmada.",
        ],
      },
      {
        title: "2. Cancelaciones tardías y ausencias",
        paragraphs: [
          "Las cancelaciones recibidas fuera del plazo anterior podrán tratarse como tardías; según políticas internas podrá exigirse prepago o limitación en futuras reservas.",
          "La ausencia injustificada («no-show») puede generar restricciones para nuevas citas en línea o depósitos para garantizar la siguiente reserva.",
        ],
      },
      {
        title: "3. Cómo cancelar",
        paragraphs: [
          "Podrá hacerlo mediante los enlaces de gestión incluidos en la confirmación de la reserva (cuando existan), respondiendo al correo de confirmación o llamando al teléfono [TELEFONO].",
          "Las comunicaciones por correo deberán enviarse a [EMAIL] indicando nombre, fecha y hora de la cita.",
        ],
      },
    ],
  },

  estetica: {
    privacy: [
      {
        paragraphs: [
          "El responsable del tratamiento es [NOMBRE_EMPRESA], domicilio en [DIRECCION]. Esta política complementa la información que el centro estético [NOMBRE_COMERCIAL] facilita sobre el tratamiento de datos personales obtenidos por la web y la agenda digital.",
        ],
      },
      {
        title: "1. Datos tratados",
        paragraphs: [
          "Identificación y contacto; datos de citas y tratamientos solicitados (sin incluir categorías especialmente protegidas salvo que usted los facilite voluntariamente en formularios).",
          "Información opcional sobre alergias o contraindicaciones cuando sea necesaria para la seguridad del tratamiento estético.",
          "Historial operativo de reservas y comunicaciones relacionadas con su visita.",
        ],
      },
      {
        title: "2. Finalidades",
        paragraphs: [
          "Organización de agenda, confirmaciones y recordatorios cuando proceda.",
          "Responder consultas previas y gestionar consentimientos informados cuando la actividad lo exija.",
          "Cumplimiento normativo y reclamaciones.",
          "Mejora del servicio y seguridad del canal digital.",
        ],
      },
      {
        title: "3. Conservación y comunicaciones",
        paragraphs: [
          "Los datos se conservarán durante los plazos necesarios para cada finalidad y obligación legal.",
          "Podremos comunicar datos a proveedores tecnológicos sujetos a contrato de tratamiento que participen en el funcionamiento del sitio o la agenda.",
        ],
      },
      {
        title: "4. Derechos",
        paragraphs: [
          "Puede ejercer los derechos reconocidos en la normativa aplicable escribiendo a [EMAIL], identificándose de forma razonable.",
        ],
      },
    ],
    terms: [
      {
        paragraphs: [
          "Al utilizar el sitio y reservar tratamientos en [NOMBRE_COMERCIAL] usted acepta estos Términos en nombre de [NOMBRE_EMPRESA].",
        ],
      },
      {
        title: "1. Servicios",
        paragraphs: [
          "Los tratamientos y duraciones publicadas son descriptivas; el profesional podrá adaptar la sesión según valoración previa y protocolos de seguridad.",
        ],
      },
      {
        title: "2. Reservas y contraindicaciones",
        paragraphs: [
          "El usuario declara informar de contraindicaciones médicas relevantes cuando el tipo de tratamiento lo requiera.",
          "La empresa podrá rechazar el servicio si existiera riesgo manifiesto para la salud del cliente o del personal.",
        ],
      },
      {
        title: "3. Productos y pagos",
        paragraphs: [
          "Los precios pueden actualizarse; el importe aplicable será el comunicado al confirmar la cita o en recepción según corresponda.",
        ],
      },
      {
        title: "4. Responsabilidad",
        paragraphs: [
          "La responsabilidad del centro frente al uso del sitio web se delimita conforme a la ley aplicable. Los resultados estéticos pueden variar según características individuales.",
        ],
      },
    ],
    cancellation: [
      {
        paragraphs: [
          "Política de cancelación y reprogramación de citas para servicios estéticos prestados por [NOMBRE_COMERCIAL] ([NOMBRE_EMPRESA]).",
        ],
      },
      {
        title: "1. Antelación mínima",
        paragraphs: [
          "Las cancelaciones o cambios de fecha/h deben solicitarse con al menos: [TIEMPO_CANCELACION] antes del inicio programado de la sesión.",
        ],
      },
      {
        title: "2. Efectos del incumplimiento",
        paragraphs: [
          "Las cancelaciones fuera de plazo y las ausencias pueden dar lugar a cargos parciales o políticas de depósito para futuras reservas, según lo comunicado en recepción o en la confirmación electrónica.",
        ],
      },
      {
        title: "3. Canales",
        paragraphs: [
          "Gestión online cuando esté disponible, o bien [TELEFONO] / [EMAIL] con los datos de la reserva.",
        ],
      },
    ],
  },

  abogado: {
    privacy: [
      {
        paragraphs: [
          "En cumplimiento del principio de transparencia, [NOMBRE_EMPRESA] (en adelante, el «Despacho»), con domicilio en [DIRECCION], informa sobre el tratamiento de datos personales obtenidos a través del presente sitio web y formularios de contacto del despacho [NOMBRE_COMERCIAL].",
        ],
      },
      {
        title: "1. Datos recabados",
        paragraphs: [
          "Identificación y datos de contacto profesionales que usted voluntariamente ingrese en formularios de consulta.",
          "Contenido de la consulta inicial (descripción genérica del asunto), sin que el mero envío del formulario establezca relación de asistencia jurídica sin contrato expreso.",
          "Datos técnicos básicos de conexión cuando resulten necesarios por seguridad.",
        ],
      },
      {
        title: "2. Finalidades",
        paragraphs: [
          "Valorar la viabilidad de una posible relación profesional y responder a solicitudes de información previa.",
          "Gestionar citas o videollamadas de primera entrevista cuando exista ese módulo.",
          "Cumplimiento de obligaciones legales aplicables al ejercicio de la profesión y prevención de blanqueo cuando corresponda conforme a normativa vigente.",
          "La base jurídica será la ejecución de medidas precontractuales, el consentimiento del interesado o el interés legítimo del Despacho en la gestión segura del canal, según cada tratamiento.",
        ],
      },
      {
        title: "3. Secreto profesional y destinatarios",
        paragraphs: [
          "Los datos se tratarán con confidencialidad conforme a las reglas del ejercicio de la abogacía. Solo tendrán acceso personal autorizado y encargados del tratamiento estrictamente necesarios (por ejemplo hosting o correo profesional), con las garantías contractuales adecuadas.",
        ],
      },
      {
        title: "4. Plazos y derechos",
        paragraphs: [
          "Los datos se conservarán durante el tiempo necesario para atender la consulta y, en su caso, la relación profesional y los plazos legales de conservación documental.",
          "Puede ejercer derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición escribiendo a [EMAIL].",
        ],
      },
    ],
    terms: [
      {
        paragraphs: [
          "Los presentes Términos regulan el uso del sitio web de [NOMBRE_EMPRESA] y la información general publicada bajo la marca [NOMBRE_COMERCIAL]. No sustituyen el contrato de prestación de servicios jurídicos, que se formalizará por separado cuando proceda.",
        ],
      },
      {
        title: "1. Naturaleza informativa",
        paragraphs: [
          "Los contenidos del sitio tienen carácter general y no constituyen asesoramiento jurídico específico. Cada caso requiere análisis individualizado.",
        ],
      },
      {
        title: "2. Contacto y representación",
        paragraphs: [
          "El envío de formularios no crea por sí solo relación abogado-cliente hasta que el Despacho confirme por escrito la aceptación del encargo conforme a sus políticas internas y normativa aplicable.",
        ],
      },
      {
        title: "3. Honorarios",
        paragraphs: [
          "Las tarifas y modalidades de facturación serán las acordadas expresamente en propuesta o contrato de honorarios.",
        ],
      },
      {
        title: "4. Limitación de responsabilidad",
        paragraphs: [
          "Salvo disposición legal imperativa en contrario, el Despacho no será responsable de decisiones tomadas únicamente con base en información genérica del sitio sin contrato de asistencia.",
        ],
      },
    ],
    cancellation: [
      {
        paragraphs: [
          "Normas sobre cancelación o reprogramación de reuniones previas concertadas con [NOMBRE_COMERCIAL], titularidad de [NOMBRE_EMPRESA].",
        ],
      },
      {
        title: "1. Preaviso",
        paragraphs: [
          "Las cancelaciones o cambios de horario de reuniones agendadas deberán comunicarse con una antelación mínima de [TIEMPO_CANCELACION], salvo fuerza mayor debidamente acreditada.",
        ],
      },
      {
        title: "2. Consecuencias",
        paragraphs: [
          "El incumplimiento reiterado del preaviso podrá condicionar la aceptación de nuevas solicitudes de cita o el cobro de tiempo reservado, según lo acordado en cada caso.",
        ],
      },
      {
        title: "3. Comunicación",
        paragraphs: [
          "Las cancelaciones pueden notificarse a [EMAIL] o al teléfono [TELEFONO], identificando la fecha y hora originales de la reunión.",
        ],
      },
    ],
  },
};

function pickNiche(type: BusinessNiche): BusinessNiche {
  if (type in LIBRARY) return type;
  return NICHE_FALLBACK;
}

/** Secciones legales interpoladas listas para renderizar. */
export function getLegalDocument(kind: LegalDocKind, site: SiteConfig): LegalSection[] {
  const niche = pickNiche(site.business.type);
  const sections = LIBRARY[niche][kind];
  return interpolateSections(sections, site);
}
