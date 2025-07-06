const fs = require('fs');
const path = './maindb.json';

if (fs.existsSync(path)) {
  fs.unlinkSync(path);
  console.log('✔️ Old maindb.json deleted');
}

const adminDb = {
  admin: {
    username: 'admin',
    password: 'admin',
    loginToken: '',
    logs: [],
    ipLog: []
  },
  clients: []
};

fs.writeFileSync(path, JSON.stringify(adminDb, null, 2));
console.log('✅ New maindb.json created with default login');
