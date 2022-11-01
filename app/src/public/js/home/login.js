'use strict';

const id = document.querySelector('#id'), 
    psword = document.querySelector('#psword'), 
    loginBtn = document.querySelector('#button');

    loginBtn.addEventListener('click', login);

    function login(){
        if(!id.value) return alert('아이디를 입력해주십시오.');
        if(!psword.value) return alert('비밀번호를 입력해주십시오.');

        const req = {
            id: id.value, 
            psword: psword.value
        };

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
            if(res.success){
                location.href="/";
            } else {
                if(res.err) return alert(res.err);
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error('로그인 중 에러 발생'));
        })
    }