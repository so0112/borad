import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Post = () => {
  const [datas, setDatas] = useState([
    {
      id: 3,
      vote: 2,
      answer: 0,
      views: 11,
      body: "Is there a way to transform these 2 arrays by using jq",
      nickname: "skeleton_mouse",
    },
    {
      id: 2,
      vote: 0,
      answer: 1,
      views: 5,
      body: "How to update cache in PWA",
      nickname: "mmh4all",
    },
    {
      id: 1,
      vote: 1,
      answer: 0,
      views: 15,
      body: "The PushSubscription object differs in the documentation",
      nickname: "Daniel Tanase",
    },
  ]);

  const onInterestingClick = () => {
    let newData = [...datas];
    newData.sort((a, b) => (a.id < b.id ? 1 : -1));
    setDatas(newData);
  };

  const onHotClick = () => {
    let newData = [...datas];
    newData.sort((a, b) => (a.vote < b.vote ? 1 : -1));
    setDatas(newData);
  };

  return (
    <>
      <Top>
        <div className="Top__question">
          <h1>Top Questions</h1>
          <button className="Ask__button">
            <Link to="/create_write">Ask Question</Link>
          </button>
        </div>
        <div className="Top__interesting">
          <button onClick={onInterestingClick}>Interesting</button>
          <button onClick={onHotClick}>Hot</button>
        </div>
      </Top>
      {datas &&
        datas.map((el) => (
          <Container key={el.id}>
            <div className="left__side">
              <span className="vote">{el.vote} votes</span>
              <span>{el.answer} answers</span>
              <span>{el.views} views</span>
            </div>
            <div className="body__container">
              <div className="Body">{el.body}</div>
              <div className="Nickname">{el.nickname}</div>
            </div>
          </Container>
        ))}
    </>
  );
};

const Top = styled.div`
  margin: 0 auto;
  margin-top: 53px;
  width: 730px;
  height: 160px;
  border: 1px solid #d6d9dc;
  border-right: none;
  padding-left: 20px;
  .Top__question {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .Ask__button {
    margin-top: 20px;
    height: 50px;
    width: 110px;
    margin-right: 10px;
    background-color: #379fef;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  .Top__interesting {
    padding-top: 10px;
    padding-right: 10px;
    text-align: right;

    > button {
      width: 100px;
      height: 40px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const Container = styled.section`
  display: flex;
  text-align: center;
  margin: 0 auto;
  width: 750px;
  height: 106px;
  border: 1px solid #d6d9dc;
  border-right: none;
  .left__side {
    display: flex;
    text-align: right;
    flex-direction: column;
    align-content: space-between;
    width: 108px;
    margin: 10px;
    margin-left: 0px;

    .vote {
      font-weight: 600;
    }
    > span {
      margin-left: auto;
      margin: 2px;
      font-size: 15px;
    }
  }
  .body__container {
    width: 100%;
    .Body {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      color: #0074cc;
      margin-top: 10px;
    }
    .Nickname {
      margin-top: 15px;
      text-align: right;
      margin-right: 10px;
    }
  }
`;
export default Post;
