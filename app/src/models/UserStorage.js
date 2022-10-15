'use strict';

class UserStorage {
    static #users = {  // # 를 붙이면 private 한 상태가 됨
        id: ['woorimIT', '나개발', '김팀장'], 
        psword: ['1234', '1234', '123456'], 
        name: ['우리밋', '나개발', '김팀장'], 
    };

    static getUsers(...fields){
        // return this.#users;
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;