const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\btext-zinc-100\b(?!(\/| dark:))/g, 'text-zinc-900 dark:text-zinc-100 transition-colors duration-300');
    // Also fix any double replaces just in case
    content = content.replace(/text-zinc-900 dark:text-zinc-900 dark:text-zinc-100 transition-colors duration-300 transition-colors duration-300/g, 'text-zinc-900 dark:text-zinc-100 transition-colors duration-300');
    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    });
}
console.log("Replacing text-zinc-100...");
processDirectory('src/components');
console.log("text-zinc-100 replacement complete");
