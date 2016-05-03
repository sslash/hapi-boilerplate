const db = require('./dbHandle');
function ping () {
    return db.any(`SELECT 'DBD::Pg ping test'`);
}

module.exports = ping;
