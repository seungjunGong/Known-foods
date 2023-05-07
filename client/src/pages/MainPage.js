import React from "react";
import styled from "styled-components";
import app_icon from "../assets/app_icon.png";
import ImageDropzone from "../components/ImageDropzone";

const MainContainer = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  #title_layout {
    display: flex;
    flex-direction: row;
    align-items: center; /* 중앙 정렬 */
    justify-content: center; /* 동일한 간격으로 배치 */
  }

  h1 {
    font-size: 5rem;
    color: white;
  }
`;

function MainPage() {
  return (
    <MainContainer>
      <div id="title_layout">
        <img src={app_icon} alt="App_icon" />
        <h1>알고먹자</h1>
      </div>
      <ImageDropzone />
    </MainContainer>
  );
}

export default MainPage;
