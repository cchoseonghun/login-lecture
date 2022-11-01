'use strict';

const db = require('../config/db');

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE id = ?;';
            db.query(query, [id], (err, data) => {
                console.log(data[0]);
                if (err) reject(`${err}`);
                else resolve(data[0]);
            })
        });
    };

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users(id, name, psword) VALUES(?, ?, ?);';
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {  // insert는 저장하는거기 때문에 data를 받을게 없음
                if (err) reject(`${err}`);
                else resolve({ success: true });
            });
        });
    };
}

module.exports = UserStorage;