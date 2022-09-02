import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";

function CreateWord() {
    const days = useFetch(`http://localhost:3001/days`)
    // 완료시 이동
    const navigate = useNavigate();

    //중복 포스팅 금지
    const [isLoading, setIsLoding] = useState(false);

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(e) {

        // 현재 Ref의 값 확인용
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        // form 작성시 새로고침 방지
        e.preventDefault();

        if (!isLoading) {
            setIsLoding(true)
            fetch(`http://localhost:3001/words/`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false,
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성 완료")
                    navigate(`/day/${dayRef.current.value}`)
                    setIsLoding(false)
                }
            })
        }
    }


    return (
        <form onSubmit={onSubmit}>
            {isLoading}
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="단어" ref={engRef}></input>
            </div>

            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="뜻" ref={korRef}></input>
            </div>

            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>

            <button
                style={{ opacity: isLoading ? 0.5 : 1 }}
            >{isLoading ? "Saving.." : "저장"}
            </button>

        </form>
    );
}

export default CreateWord;