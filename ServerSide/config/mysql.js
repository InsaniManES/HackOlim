const mysql = require('mysql2');
// create the connection to database

class MySQL {
    constructor(conn_settings) {
        this.settings = conn_settings;
        this.pool = {};
        this.connect()
    }

    connect() {
        let pool = mysql.createPool(this.settings);
        this.pool = pool.promise();
    }

    async runQuery(query) {
        let connection = await mysql.createConnection(this.settings);
        return await this.pool.query(query).catch((err)=>{
            console.error(err);
        });
    }
}

module.exports = MySQL;