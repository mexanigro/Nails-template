const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Safe replace text-white
    // We want to skip text-white if it's right after bg-amber, or if it's already dark:text-white
    content = content.replace(/\btext-white\b(?!(\/| hover| dark| \}))/g, 'text-zinc-950 dark:text-white');
    
    // Fix overzealous replacements
    content = content.replace(/dark:text-zinc-950 dark:text-white/g, 'dark:text-white');
    content = content.replace(/text-zinc-950 dark:text-zinc-950 dark:text-white/g, 'text-zinc-950 dark:text-white');
    content = content.replace(/text-zinc-950 dark:text-white\/50/g, 'text-white/50');
    content = content.replace(/hover:text-zinc-950 dark:text-white/g, 'hover:text-white');
    content = content.replace(/text-zinc-950 dark:text-white font-bold bg-zinc-50 dark:bg-zinc-950/g, 'text-zinc-950 dark:text-white font-bold bg-zinc-50 dark:bg-zinc-950');

    // Restore text-white in amber buttons
    content = content.replace(/bg-amber-600([\s\w\-:]*)text-zinc-950 dark:text-white/g, 'bg-amber-600$1text-white');
    content = content.replace(/bg-amber-600 hover:bg-amber-500 disabled:bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300 disabled:text-zinc-500 dark:text-zinc-400 transition-colors duration-300 p-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 text-zinc-950 dark:text-white/g, 'bg-amber-600 hover:bg-amber-500 disabled:bg-zinc-100 dark:bg-zinc-800 disabled:text-zinc-500 dark:text-zinc-400 p-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 text-white');
    
    fs.writeFileSync(filePath, content, 'utf8');
}

function traverse(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    });
}

traverse('src/components');
console.log("text-white mapping complete.");
