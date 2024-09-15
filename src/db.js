import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host:  "mysql-295d514b-tec-966f.k.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_as32nwuvzwernUtLacD",
    port: 25027,
    database: "VitalScan"
});