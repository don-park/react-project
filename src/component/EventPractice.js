import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form, //기존 form 내용 복사한 뒤,
            [e.target.name]: e.target.value // 덮어씌우기
        };
        setForm(nextForm);
        console.log(e.target.value);
    };

    const onClick = () => {
        alert(username +" : "+ message);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        };
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text"
                name="username"
                placeholder="입력해 보세요"
                value={username}
                onChange={onChange}
            />
            <input type="text"
                name="message"
                placeholder="입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;