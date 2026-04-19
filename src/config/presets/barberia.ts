import type { NichePreset } from "../../types";

export const barberiaPreset: NichePreset = {
  business: {
    type: "barberia",
    legalName: "ONYX & STEEL GROOMING LLC",
    address:
      "123 Precision Way, Downtown Arts District, New York, NY 10012, Estados Unidos",
    cancellationPolicy: "24 horas de antelación respecto al inicio de la cita",
  },

  brand: {
    name: "ONYX & STEEL",
    tagline: "The Modern Gentleman's Sanctuary",
    description:
      "Barbería de alto nivel donde la artesanía tradicional se fusiona con la precisión contemporánea. Reserva tu experiencia de grooming premium.",
    logoIconName: "Scissors",
    aiPersona:
      "Eres un asistente virtual especializado en grooming de lujo para caballeros. Tu misión es orientar a los clientes con elegancia, responder sus preguntas de forma concisa y recomendar los servicios Onyx & Steel que mejor se adapten a su estilo.",
  },

  hero: {
    titlePrefix: "PRECISION",
    titleHighlight: "CRAFTED",
    titleSuffix: "FOR THE MODERN GENTLEMAN",
    subtitle:
      "Donde los maestros artesanos esculpen confianza en cada corte. Grooming elevado a la categoría de arte.",
    ctaPrimary: "RESERVA TU SILLA",
    ctaSecondary: "VER SERVICIOS",
    backgroundImage:
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=2000",
  },

  contact: {
    address: {
      street: "123 Precision Way",
      district: "Downtown Arts District",
      cityStateZip: "New York, NY 10012",
    },
    phone: "(555) 123-4567",
    email: "hello@onyxandsteel.com",
    social: {
      instagram: "https://instagram.com/onyxandsteel",
      facebook: "https://facebook.com/onyxandsteel",
      twitter: "https://twitter.com/onyxandsteel",
    },
  },

  hours: {
    monday: { start: "09:00", end: "20:00" },
    tuesday: { start: "09:00", end: "20:00" },
    wednesday: { start: "09:00", end: "20:00" },
    thursday: { start: "09:00", end: "20:00" },
    friday: { start: "09:00", end: "21:00" },
    saturday: { start: "10:00", end: "18:00" },
    sunday: null,
  },

  // ─── Services ────────────────────────────────────────────────────────────────
  // CRITICAL: services[i] maps 1:1 to sections.services.images[i].
  // If you add a service here, add its corresponding image below.
  services: [
    {
      id: "haircut",
      name: "Corte Clásico",
      description:
        "Corte de precisión esculpido a la geometría de tu rostro. Tijeras japonesas, navaja de terminación y acabado con producto de alta gama.",
      duration: 30,
      price: 45,
    },
    {
      id: "beard-sculpt",
      name: "Escultura de Barba",
      description:
        "Perfilado milimétrico con navaja recta, delineado de contornos y bálsamo hidratante de argán. La barba que mereces.",
      duration: 25,
      price: 35,
    },
    {
      id: "straight-shave",
      name: "Afeitado con Navaja",
      description:
        "Ritual de afeitado clásico: toalla caliente, crema artesanal de jabón de sándalo y navaja de acero inoxidable. Piel de acero pulido.",
      duration: 35,
      price: 40,
    },
    {
      id: "color-treatment",
      name: "Tinte & Matiz",
      description:
        "Cobertura de canas o color completo con pigmentos de lujo libres de amoniaco. Natural, duradero y de acabado fotográfico.",
      duration: 50,
      price: 65,
    },
    {
      id: "full-ritual",
      name: "Ritual Completo",
      description:
        "La experiencia Onyx & Steel al completo: corte de precisión, escultura de barba y tratamiento con toalla caliente y sérum capilar.",
      duration: 75,
      price: 90,
    },
  ],

  staff: [
    {
      id: "alex",
      slug: "alex-reed",
      name: "Alex 'The Blade' Reed",
      photoUrl:
        "https://images.unsplash.com/photo-1598524322298-d7f9733c82ef?auto=format&fit=crop&q=80&w=800",
      specialty: "Classic Fades & Tapers",
      bio: "Con más de 12 años de oficio, Alex domina los fades de piel y las siluetas clásicas con una precisión que convierte cada corte en una firma personal.",
      portfolio: [
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=1200",
      ],
      social: {
        instagram: "https://instagram.com/alexblade",
        twitter: "https://twitter.com/alexblade",
      },
      schedule: {
        monday: {
          isOpen: true,
          hours: { start: "09:00", end: "18:00" },
          breaks: [{ start: "13:00", end: "14:00", label: "Lunch" }],
        },
        tuesday: {
          isOpen: true,
          hours: { start: "09:00", end: "18:00" },
          breaks: [{ start: "13:00", end: "14:00", label: "Lunch" }],
        },
        wednesday: {
          isOpen: true,
          hours: { start: "09:00", end: "18:00" },
          breaks: [{ start: "13:00", end: "14:00", label: "Lunch" }],
        },
        thursday: {
          isOpen: true,
          hours: { start: "09:00", end: "18:00" },
          breaks: [{ start: "13:00", end: "14:00", label: "Lunch" }],
        },
        friday: {
          isOpen: true,
          hours: { start: "09:00", end: "18:00" },
          breaks: [{ start: "13:00", end: "14:00", label: "Lunch" }],
        },
        saturday: {
          isOpen: true,
          hours: { start: "10:00", end: "16:00" },
          breaks: [],
        },
        sunday: {
          isOpen: false,
          hours: { start: "00:00", end: "00:00" },
          breaks: [],
        },
      },
    },
    {
      id: "daniel",
      slug: "daniel-petrocelli",
      name: "Daniel Petrocelli",
      photoUrl:
        "https://images.unsplash.com/photo-1599351431247-f13b29c4e1d9?auto=format&fit=crop&q=80&w=800",
      specialty: "Beard Artistry & Grooming",
      bio: "Daniel es un maestro del vello facial. Su dominio de la navaja recta y el contorneado de barba lo han convertido en el referente del afeitado de lujo en la ciudad.",
      portfolio: [
        "https://images.unsplash.com/photo-1593702295094-172f3e098808?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512690196236-724d90957dc3?auto=format&fit=crop&q=80&w=1200",
      ],
      social: {
        instagram: "https://instagram.com/danielgrooming",
      },
      schedule: {
        monday: {
          isOpen: false,
          hours: { start: "00:00", end: "00:00" },
          breaks: [],
        },
        tuesday: {
          isOpen: true,
          hours: { start: "10:00", end: "19:00" },
          breaks: [{ start: "14:00", end: "15:00", label: "Break" }],
        },
        wednesday: {
          isOpen: true,
          hours: { start: "10:00", end: "19:00" },
          breaks: [{ start: "14:00", end: "15:00", label: "Break" }],
        },
        thursday: {
          isOpen: true,
          hours: { start: "10:00", end: "19:00" },
          breaks: [{ start: "14:00", end: "15:00", label: "Break" }],
        },
        friday: {
          isOpen: true,
          hours: { start: "10:00", end: "19:00" },
          breaks: [{ start: "14:00", end: "15:00", label: "Break" }],
        },
        saturday: {
          isOpen: true,
          hours: { start: "10:00", end: "19:00" },
          breaks: [{ start: "14:00", end: "15:00", label: "Break" }],
        },
        sunday: {
          isOpen: false,
          hours: { start: "00:00", end: "00:00" },
          breaks: [],
        },
      },
    },
    {
      id: "michael",
      slug: "michael-vane",
      name: "Michael Vane",
      photoUrl:
        "https://images.unsplash.com/photo-1622286332618-f2803b1950d4?auto=format&fit=crop&q=80&w=800",
      specialty: "Scissor Work & Texture",
      bio: "Michael fusiona técnicas europeas de tijera con trabajo de textura contemporáneo. El resultado: looks sin esfuerzo aparente que proyectan autoridad.",
      portfolio: [
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1503951458645-643d53efd90f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1501612722-7940219c118d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1622286332618-f2803b1950d4?auto=format&fit=crop&q=80&w=1200",
      ],
      social: {
        instagram: "https://instagram.com/michaelvane",
        twitter: "https://twitter.com/michaelvane",
      },
      schedule: {
        monday: {
          isOpen: true,
          hours: { start: "09:00", end: "17:00" },
          breaks: [{ start: "12:00", end: "13:00", label: "Lunch" }],
        },
        tuesday: {
          isOpen: true,
          hours: { start: "09:00", end: "17:00" },
          breaks: [{ start: "12:00", end: "13:00", label: "Lunch" }],
        },
        wednesday: {
          isOpen: true,
          hours: { start: "09:00", end: "17:00" },
          breaks: [{ start: "12:00", end: "13:00", label: "Lunch" }],
        },
        thursday: {
          isOpen: true,
          hours: { start: "09:00", end: "17:00" },
          breaks: [{ start: "12:00", end: "13:00", label: "Lunch" }],
        },
        friday: {
          isOpen: true,
          hours: { start: "09:00", end: "17:00" },
          breaks: [{ start: "12:00", end: "13:00", label: "Lunch" }],
        },
        saturday: {
          isOpen: false,
          hours: { start: "00:00", end: "00:00" },
          breaks: [],
        },
        sunday: {
          isOpen: false,
          hours: { start: "00:00", end: "00:00" },
          breaks: [],
        },
      },
    },
  ],

  testimonials: [
    {
      name: "Marcus Thorne",
      title: "CEO, TechSolutions",
      text: "La precisión es incomparable. Alex leyó la geometría de mi rostro antes de tomar la primera herramienta. Salí de la silla sintiéndome un hombre diferente.",
      rating: 5,
    },
    {
      name: "Julian Vane",
      title: "Arquitecto",
      text: "La técnica de navaja recta de Daniel es una meditación. El afeitado más limpio y cercano que he tenido en veinte años. No iré a ningún otro sitio.",
      rating: 5,
    },
    {
      name: "Elias Reed",
      title: "Fotógrafo",
      text: "Interior oscuro, energía enfocada, resultado de clase mundial. Así debe sentirse una barbería. Sin teatralidad, solo maestría pura.",
      rating: 5,
    },
  ],

  // ─── Gallery ─────────────────────────────────────────────────────────────────
  // 12 curated high-resolution barbershop images from Unsplash.
  gallery: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1593702295094-172f3e098808?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512690196236-724d90957dc3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1599351431247-f13b29c4e1d9?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1622286332618-f2803b1950d4?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1503951458645-643d53efd90f?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1200",
  ],

  sections: {
    services: {
      title: "Arte & Oficio",
      subtitle: "Servicios Premium",
      // CRITICAL: one image per service, in the same order as the services array.
      // services[0] = Corte Clásico      → barber cutting hair
      // services[1] = Escultura de Barba → barber trimming a beard
      // services[2] = Afeitado con Navaja → straight razor shave
      // services[3] = Tinte & Matiz       → hair color application
      // services[4] = Ritual Completo     → full barbershop session
      images: [
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1593702295094-172f3e098808?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600",
      ],
    },
    team: {
      title: "Maestros del Oficio // v1.0",
      subtitle: "Los Artesanos",
      description:
        "Un equipo seleccionado a mano por su precisión técnica, visión escultórica y compromiso absoluto con la integridad de la silueta masculina moderna. Cada silla, un maestro.",
    },
    whyChooseUs: {
      title: "El Estándar",
      subtitle: "Por Qué Elegirnos",
      mainImage:
        "https://images.unsplash.com/photo-1512690196236-724d90957dc3?auto=format&fit=crop&q=80&w=1000",
      badge: "10 Años\nDe Maestría",
      benefits: [
        {
          iconName: "ShieldCheck",
          title: "Higiene Absoluta",
          desc: "Esterilización de nivel médico de todos los instrumentos tras cada cliente. Tu seguridad es nuestra norma irrenunciable.",
        },
        {
          iconName: "Clock",
          title: "Puntualidad Suiza",
          desc: "Respetamos tu agenda. Empezamos a la hora acordada, siempre. Sin listas de espera, sin excusas.",
        },
        {
          iconName: "Award",
          title: "Artesanía Maestra",
          desc: "Nuestro equipo supera formaciones rigurosas y certificaciones para dominar cada técnica y cada tipo de cabello.",
        },
        {
          iconName: "Zap",
          title: "Resultados Afilados",
          desc: "La precisión no es un objetivo, es nuestra norma. No paramos hasta que cada línea es perfecta.",
        },
      ],
    },
    testimonials: {
      title: "Voces de Confianza",
      subtitle: "Lo Que Dicen Nuestros Clientes",
    },
    gallery: {
      title: "Maestría Visual",
      subtitle: "El Portfolio",
    },
    location: {
      title: "Visítanos",
      subtitle: "Encuentra La Silla",
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Envíanos Una Consulta",
      description:
        "¿Tienes una solicitud especial o alguna pregunta? Escríbenos y el equipo te responderá a la brevedad.",
    },
    booking: {
      title: "Reservar Cita",
      tagline: "La Experiencia del Santuario del Caballero Moderno",
      steps: {
        service: "Servicio",
        staff: "Artesano",
        datetime: "Horario",
        details: "Confirmar",
        payment: "Pago",
      },
      aiConsultant: {
        title: "Inteligencia Neural",
        subtitle: "¿Necesitas Precisión de Estilo?",
        description:
          "Consulta a nuestro especialista IA para que recomiende tu próxima misión de grooming.",
        agentLabel: "Agente Consultor",
        placeholder:
          "Describe tu visión (ej. 'Fade bajo con barba trabajada y raya marcada')...",
      },
      success: {
        title: "Éxito",
        confirmed: "¡Confirmado!",
        requestSaved: "¡Solicitud Guardada!",
        cancelled: "Cancelado",
      },
    },
    admin: {
      staff: {
        title: "Personal Táctico",
        scheduleTitle: "Ventana Operativa Semanal",
        commitButton: "Guardar Horario",
        enforcementTitle: "Protocolo de Control Temporal",
        enforcementDesc:
          "Los horarios del personal son aplicados estrictamente por el motor de reservas. Cualquier cambio en las ventanas semanales o días inactivos se propagará al instante al frontend, evitando asignaciones imposibles.",
      },
    },
  },
};
