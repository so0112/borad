// button 클릭시 days 값 하나 추가 후 첫번째 페이지로 이동

import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`)
    const navigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        }).then(res => {
            if (res.ok) {
                alert("day 생성 완료");
                navigate('/');
            }
        })
    }

    return (
        <div>
            <h3> 현재 일수 : {days.length} 일</h3>
            <button onClick={addDay}> Day 추가 </button>
        </div>
    );
}

export default CreateDay;