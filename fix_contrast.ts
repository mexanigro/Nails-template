import { promises as fs } from 'fs';
import * as path from 'path';

async function walk(dir: string, fileList: string[] = []) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fileList = await walk(path.join(dir, file), fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

async function run() {
  const files = await walk('./src');
  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    let changed = false;
    
    if (content.includes('text-zinc-500')) {
      content = content.replace(/text-zinc-500/g, 'text-zinc-300');
      changed = true;
    }
    if (content.includes('text-zinc-600')) {
      content = content.replace(/text-zinc-600/g, 'text-zinc-400');
      changed = true;
    }
    
    if (changed) {
      await fs.writeFile(file, content, 'utf8');
      console.log('Fixed contrast in', file);
    }
  }
}

run().catch(console.error);
