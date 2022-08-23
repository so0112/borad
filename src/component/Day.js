// uri의 params를 받아옴
import { useParams } from "react-router-dom";
import Word from "./Word"
import useFetch from "../hooks/useFetch";

function Day() {
    // useParams는 string 타입으로 값을 가져오기때문에 Number로 이용시에는 타입변환 필요
    const { day } = useParams();
    // const wordList = dummy.words.filter(word => {
    //     return (
    //         word.day === parseInt(day)
    //     );
    // });

    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    // useFetch 로 대체된 값

    // const [words, setWords] = useState([]);

    // //useEffect, fetch를 통한 데이터 가져오기
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setWords(data);
    //         })
    // }, [day])

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => {
                        return (
                            <Word word={word} key={word.id} />
                        )
                    })}
                </tbody>
            </table>
        </>
    );


}
export default Day;