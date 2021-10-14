const NodeClam = require('clamscan');
const ClamScan = new NodeClam().init({
    removeInfected: true, // Removes files if they are infected
    quarantineInfected: '~/infected/', // Move file here. removeInfected must be FALSE, though.
    scanLog: '/var/log/node-clam', // You're a detail-oriented security professional.
    debugMode: true, // This will put some debug info in your js console
    fileList: '/home/webuser/scanFiles.txt', // path to file containing list of files to scan
    scanRecursively: false, // Choosing false here will save some CPU cycles
    clamscan: {
        path: '/usr/bin/clam', // I dunno, maybe your clamscan is just call "clam"
        scanArchives: false, // Choosing false here will save some CPU cycles
        db: '/usr/bin/better_clam_db', // Path to a custom virus definition database
        active: false // you don't want to use this at all because it's evil
    },
    clamdscan: {
        socket: '/var/run/clamd.scan/clamd.sock', // This is pretty typical
        host: '127.0.0.1', // If you want to connect locally but not through socket
        port: 12345, // Because, why not
        timeout: 300000, // 5 minutes
        localFallback: true, // Use local preferred binary to scan if socket/tcp fails
        path: '/bin/clamdscan', // Special path to the clamdscan binary on your server
        configFile: '/etc/clamd.d/daemon.conf', // A fairly typical config location
        multiscan: false, // You hate speed and multi-threaded awesome-sauce
        reloadDb: true, // You want your scans to run slow like with clamscan
        active: false, // you don't want to use this at all because it's evil
        bypassTest: true, // Don't check to see if socket is available. You should probably never set this to true.
    },
    preference: 'clamscan' // If clamscan is found and active, it will be used by default
});

// Get instance by resolving ClamScan promise object
ClamScan.then(async clamscan => {
    try {
        // You can re-use the `clamscan` object as many times as you want
        const version = await clamscan.getVersion();
        console.log(`ClamAV Version: ${version}`);

        const {isInfected, file, viruses} = await clamscan.isInfected('package.json');
        if (isInfected) console.log(`${file} is infected with ${viruses}!`);
    } catch (err) {
        // Handle any errors raised by the code in the try block
    }
}).catch(err => {
    // Handle errors that may have occurred during initialization
});

