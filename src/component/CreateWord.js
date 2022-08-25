import { useNavigate } from "react-router";
import { useRef } from "react";
import useFetch from "../hooks/useFetch";

function CreateWord() {
    // 완료시 이동
    const navigate = useNavigate();

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(e) {

        // form 작성시 새로고침 방지
        e.preventDefault();

        fetch(`http://localhost:3001/words/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                eng: engRef.current.value,
                kor: korRef.current.value,
                day: 1
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성 완료")
                navigate(`/`)
            }
        })
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Title</label>
                <input type="text" placeholder="제목" ref={engRef}></input>
            </div>

            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="글 내용" ref={korRef}></input>
            </div>

            <button> 저장 </button>
        </form>
    );
}

export default CreateWord;