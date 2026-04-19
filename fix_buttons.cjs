const fs = require('fs');
const path = require('path');

function fixDisabledState(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing disabled modifiers
    content = content.replace(/disabled:bg-zinc-100 dark:bg-zinc-800/g, 'disabled:bg-zinc-100 dark:disabled:bg-zinc-800');
    content = content.replace(/disabled:text-zinc-500 dark:text-zinc-400/g, 'disabled:text-zinc-500 dark:disabled:text-zinc-400');
    
    // Also, some buttons have `bg-amber-600 ... text-zinc-950 dark:text-white` or similar, but the amber buttons should explicitly just have `text-white` (which I think I fixed before, but just double-checking).
    
    // Some buttons lost `text-white`
    content = content.replace(/gap-3 text-zinc-950 dark:text-white/g, 'gap-3 text-white'); // from previous botched runs
    // Wait, let's just make sure those specific classes are clean
    
    // Drop transition-colors duration-300 from buttons where it clusters
    content = content.replace(/dark:disabled:bg-zinc-800 transition-colors duration-300/g, 'dark:disabled:bg-zinc-800');
    content = content.replace(/dark:disabled:text-zinc-400 transition-colors duration-300/g, 'dark:disabled:text-zinc-400');

    fs.writeFileSync(filePath, content, 'utf8');
}

function traverse(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            fixDisabledState(fullPath);
        }
    });
}

traverse('src/components');
console.log("Disabled buttons fixed.");
