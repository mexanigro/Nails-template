const fs = require('fs');

function fixArtifact() {
    let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');
    content = content.replace(/dark:text-zinc-900 dark:text-zinc-100 transition-colors duration-300/g, 'dark:text-zinc-100 transition-colors duration-300');
    content = content.replace(/dark:text-zinc-900 dark:text-锌/g, 'dark:text-zinc-100'); // Just in case
    fs.writeFileSync('src/components/layout/Navbar.tsx', content, 'utf8');
}
fixArtifact();
