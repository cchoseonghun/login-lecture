'use strict';

const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res)=>{
        res.render('home/index');
    }, 
    login: (req, res)=>{
        res.render('home/login');
    }, 
};

const process = {
    login: (req, res)=>{
        // console.log(req.body);
        const id = req.body.id, 
            psword = req.body.psword;

        // console.log(UserStorage.users); // UserStorage 내부 users가 static이어야함
        // console.log(UserStorage.getUsers('id', 'psword'));
        const users = UserStorage.getUsers('id', 'psword');

        const response = {};
        if((users.id.includes(id))){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
                // return res.json({
                //     success: true, 
                // });
            }
        }

        response.success = false;
        response.msg = '로그인에 실패하셨습니다.';
        return res.json(response);
        // return res.json({
        //     success: false, 
        //     msg: '로그인에 실패하셨습니다.', 
        // })
    }, 
};

module.exports = {
    output, 
    process, 
};