const fs = require('fs');
const path = './maindb.json';

if (fs.existsSync(path)) {
  fs.unlinkSync(path);
  console.log('✔️ maindb.json deleted successfully');
} else {
  console.log('⚠️ maindb.json not found (first-time run)');
}
