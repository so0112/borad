import { useState } from 'react';

// props로 넘어오는 word를 w로 앨리어스 지정
function Word({ word: w }) {
    const [word, setWord] = useState(w);

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
        <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
            <td>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr >
    )
}

export default Word;