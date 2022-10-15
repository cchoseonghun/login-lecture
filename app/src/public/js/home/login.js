'use strict';

const id = document.querySelector('#id'), 
    psword = document.querySelector('#psword'), 
    loginBtn = document.querySelector('button');

    loginBtn.addEventListener('click', login);

    function login(){
        const req = {
            id: id.value, 
            psword: psword.value
        };

        console.log('test: ' + req);

        fetch('/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(req)
        })
        // console.log로 찍어보면 Promise가 반환됨
        .then((res) => res.json()) 
        // Promise는 then을 통해 접근할 수 있음
        // .then((res) => console.log(res));  
        // parameter로 넘기는 값을 어떠한 함수 안에 다시 parameter로 넘길 때 생략가능
        // .then(console.log);  // 이렇게
        .then((res) => {

        });
    }