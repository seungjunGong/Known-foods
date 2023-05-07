import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: #c4ffeb;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #333333;
    font-family: "Open Sans", sans-serif;
  }

  .input-form {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-bottom: 2px solid #333333;
    margin-bottom: 1rem;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    outline: none;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }

  button[type="submit"] {
    background-color: #f06292;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인되었습니다!");
  };

  return (
    <LoginContainer>
      <div>
        <img src="logo.png" alt="logo" onClick={() => navigate("/")} />
      </div>
      <LoginForm onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <div className="input-form">
          <label htmlFor="username">아이디: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-form">
          <label htmlFor="password">비밀번호: </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">로그인</button>
        <br />
        <a href="/register">회원가입</a>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
