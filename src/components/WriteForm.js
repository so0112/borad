import styled from "styled-components";
import { useRef } from "react";

const WriteTemplate = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;

  border: solid 1px;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  .input_title {
    display: flex;
    flex-direction: column;
  }

  .input_body {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: 5px;
    padding: 5px;
    font-weight: bold;
    font-size: 10px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;
  }
`;

function WriteForm() {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  function onSubmit(e) {
    // 현재 Ref의 값 확인용
    console.log("title 내용 : ", titleRef.current.value);
    console.log("body 내용 : ", bodyRef.current.value);

    // form 제출시 새로고침 방지
    e.preventDefault();
  }

  return (
    <WriteTemplate>
      <form onSubmit={onSubmit}>
        <div className="input_title">
          <label>Title </label>
          <input type="text" placeholder="제목" ref={titleRef}></input>
        </div>

        <div className="input_body">
          <label>Body </label>
          <input type="text" placeholder="내용" ref={bodyRef}></input>
        </div>

        <button>게시글 저장</button>
      </form>
    </WriteTemplate>
  );
}

export default WriteForm;
