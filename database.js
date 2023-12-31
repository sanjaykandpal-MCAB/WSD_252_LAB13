import mysql from 'mysql2'
import pkg from 'dotenv/config';
const { config } = pkg;
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getNotes(){
    const [rows] = await pool.query('select * from notes2')
    return rows;

}

const notes = await getNotes();
console.log(notes);