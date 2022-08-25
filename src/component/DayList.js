import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



function DayList() {
    const days = useFetch('http://localhost:3001/days')

    // fetch로 값을 받아오기 전에는 로딩중을 띄운다.
    if (days.length === 0) {
        return <span>로딩중...</span>
    }

    // useFetch 커스텀 훅으로 대체

    // const [days, setDays] = useState([]);

    // // useEffect(() => {실행할 함수}, 의존성 배열)
    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });
    // }, []);

    return (
        <ul className='list_day'>
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}> Day {day.day} </Link>
                </li>
            ))
            }
        </ul >
    );
}

export default DayList;
