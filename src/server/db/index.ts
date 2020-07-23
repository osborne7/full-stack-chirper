import * as mysql from 'mysql';
import { rejects } from 'assert';
import { resolve } from 'path';

import Chirps from './chirps';

export const Connection = mysql.createConnection({
    host: 'localhost',
    port: 3011,
    user: 'chirpapp',
    password: 'password',
    database: 'chirpr'
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    });
}

export default {
    Chirps
}

// var mysql = require('mysql');
// var connection = 
// mysql.createConnection({
//     host: 'localhost',
//     user: 'chirpapp',
//     password: 'password',
//     database: 'chirpr'
// });

// connection.connect();