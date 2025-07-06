const fs = require('fs');
const crypto = require('crypto');
const path = './maindb.json';

// Delete old maindb.json if exists
if (fs.existsSync(path)) {
  fs.unlinkSync(path);
  console.log('✔️ Old maindb.json deleted');
}

// Generate MD5 hash of "admin"
const md5Password = crypto.createHash('md5').update('admin').digest('hex');

const adminDb = {
  admin: {
    username: 'admin',
    password: md5Password, // 🟢 hashed password
    loginToken: '',
    logs: [],
    ipLog: []
  },
  clients: []
};

// Create new maindb.json
fs.writeFileSync(path, JSON.stringify(adminDb, null, 2));
console.log('✅ New maindb.json created with default login');
console.log(`🟢 Username: admin`);
console.log(`🟢 Password: admin`);
