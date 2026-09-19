import fs from 'fs';
import path from 'path';

// CONFIGURATION
// Set DRY_RUN to false when you are ready to actually delete the files!
const DRY_RUN = false; 
const TARGET_EXTENSION = ' 2.tsx';
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'dist', 'build'];

function cleanDirectory(dirPath) {
  let files;
  try {
    files = fs.readdirSync(dirPath);
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err.message);
    return;
  }

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    let stat;

    try {
      stat = fs.statSync(fullPath);
    } catch (err) {
      console.error(`Error getting stats for ${fullPath}:`, err.message);
      continue;
    }

    if (stat.isDirectory()) {
      // Skip heavy dependency/build directories
      if (IGNORE_DIRS.includes(file)) continue;
      // Recursively scan subdirectories
      cleanDirectory(fullPath);
    } else if (stat.isFile()) {
      // Check if file ends with '2.tsx'
      if (file.endsWith(TARGET_EXTENSION)) {
        if (DRY_RUN) {
          console.log(`[DRY RUN] Would delete: ${fullPath}`);
        } else {
          try {
            fs.unlinkSync(fullPath);
            console.log(`Successfully deleted: ${fullPath}`);
          } catch (err) {
            console.error(`Failed to delete ${fullPath}:`, err.message);
          }
        }
      }
    }
  }
}

console.log(`Starting cleanup scan (DRY_RUN = ${DRY_RUN})...`);
cleanDirectory(process.cwd());
console.log('Scan complete.');
