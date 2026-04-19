const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make replacements safe using word boundaries
    content = content.replace(/\bbg-zinc-950\b(?!(\/| dark:))/g, 'bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300');
    content = content.replace(/\bbg-zinc-900\b(?!(\/| dark:))/g, 'bg-white dark:bg-zinc-900 transition-colors duration-300');
    content = content.replace(/\bbg-zinc-800\b(?!(\/| dark:))/g, 'bg-zinc-100 dark:bg-zinc-800 transition-colors duration-300');
    
    content = content.replace(/\bborder-zinc-900\b(?!(\/| dark:))/g, 'border-zinc-200 dark:border-zinc-900 transition-colors duration-300');
    content = content.replace(/\bborder-zinc-800\b(?!(\/| dark:))/g, 'border-zinc-200 dark:border-zinc-800 transition-colors duration-300');
    
    content = content.replace(/\btext-zinc-400\b(?!(\/| dark:))/g, 'text-zinc-500 dark:text-zinc-400 transition-colors duration-300');
    content = content.replace(/\btext-zinc-300\b(?!(\/| dark:))/g, 'text-zinc-600 dark:text-zinc-300 transition-colors duration-300');
    // For text-zinc-500, often it looks fine everywhere, but let's map it safely.
    // content = content.replace(/\btext-zinc-500\b(?!(\/| dark:))/g, 'text-zinc-500 dark:text-zinc-400 transition-colors duration-300');

    console.log(`Updated ${filePath}`);
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
console.log("Starting script...");
processDirectory('src/components');
console.log("Bulk replacement complete");
