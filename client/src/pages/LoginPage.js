import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: #c4ffeb;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  h1 {
    font-size: 2rem;
    color: #333333;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-bottom: 2px solid #333333;
    outline: none;
    font-size: 1rem;
  }

  button[type="submit"] {
    background-color: #f06292;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
`;

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("로그인되었습니다!");
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <label htmlFor="username">아이디:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">비밀번호:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">로그인</button>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
