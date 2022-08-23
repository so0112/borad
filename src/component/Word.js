import { useState } from 'react';

// props로 넘어오는 word를 w로 앨리어스 지정
function Word({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);


    function onChangeIsShow() {
        setIsShow(!isShow);
    }

    function onChangeIsDone() {
        // setIsDone(!isDone); // 서버에 저장 안 되는 state

        // 서버에 저장되는 state
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        })
    }

    function del() {
        // 버튼 눌렀을때 alter 창 뜨도록
        if (window.confirm("정말 삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            })
        }
    }
    if (word.id === 0) {
        return null;
    }
    return (
        <tr className={isDone ? "off" : ""}>
            <td><input type="checkbox" onClick={onChangeIsDone} checked={isDone} /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={onChangeIsShow}>뜻보기</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr >
    )
}

export default Word;