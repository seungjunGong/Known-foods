import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #c4ffeb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainForm = styled.form`
  background-color: #ffffff;
  padding: 4rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin-top: 0.5rem;
    color: #333333;
  }

  button[type="submit"] {
    background-color: #f06292;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button[type="login"] {
    background-color: #3f51b5;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  button[type="upload"] {
    background-color: #8b008b;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

function MainPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("메인페이지 방문!");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleUpload = () => {
    navigate("/upload");
  };

  return (
    <MainContainer>
      <MainForm onSubmit={handleSubmit}>
        <h1>알고먹자</h1>
        <button type="submit">방문하기</button>
        <button type="login" onClick={handleLogin}>
          {" "}
          로그인하기{" "}
        </button>
        <button type="upload" onClick={handleUpload}>
          이미지 업로드하기
        </button>
      </MainForm>
    </MainContainer>
  );
}

export default MainPage;
