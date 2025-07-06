const fs = require('fs');
const dbPath = './maindb.json';

if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('✔️ Deleted old maindb.json');
} else {
  console.log('🌀 No existing maindb.json found');
}
