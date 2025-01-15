const mysql = require("mysql2/promise")
require("dotenv").config({})
const fs = require("fs/promises")

async function dbInit() {
    try {
      // Buat koneksi ke MySQL
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_ROOT_PASSWORD,
            database: process.env.MYSQL_DB,
            port: process.env.MYSQL_PORT
        });
    
        // Baca file init.sql
        const initSql = await fs.readFile('config/init.sql', 'utf8');
    
        // Eksekusi init.sql
        await connection.query(initSql);
        console.log('Database and table created successfully');
    
        // Tutup koneksi
        await connection.end();
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}


module.exports = dbInit
  
