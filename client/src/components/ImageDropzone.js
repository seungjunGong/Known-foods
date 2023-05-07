import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Container = styled.div`
  border: 3px dashed #507e32;
  background-color: white;
  height: 30rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;
/*위 코드에서 useDropzone 훅을 사용하여 드래그 앤 드롭 인터랙션의 동작을 설정합니다. accept 옵션은 업로드 가능한 파일 형식을 지정합니다. 위 코드에서는 이미지 파일만 업로드할 수 있도록 "image/*"를 지정하였습니다.

onDrop 콜백 함수는 파일이 드롭되었을 때 호출됩니다. 이 함수 내부에서는 전달된 acceptedFiles 배열에서 첫 번째 파일만 추출하여 onUpload 콜백 함수를 호출합니다. 이렇게 함으로써, 부모 컴포넌트에서 ImageDropzone 컴포넌트에 전달된 onUpload 함수를 통해 파일을 업로드할 수 있습니다.

getRootProps 함수와 getInputProps 함수는 드롭존 요소의 프로퍼티와 이벤트 핸들러를 반환합니다. 이들 함수를 반환하는 이유는 dropzone 요소에 어떤 이벤트 핸들러가 필요한지 알아내기 위해서입니다.

마지막으로, ImageDropzone 컴포넌트를 사용하는 부모 컴포넌트에서 onUpload 콜백 함수를 구현하고 전달합니다. */
function ImageDropzone({ onUpload }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (onUpload) {
        // 선택된 파일을 전달합니다.
        onUpload(acceptedFiles[0]);
      }
    },
    multiple: false,
    disablePreview: true,
  });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>이미지를 이곳에 드롭하세요!</p>
      ) : (
        <p>이미지를 드래그 앤 드롭하거나 클릭하여 선택하세요.</p>
      )}
    </Container>
  );
}

export default ImageDropzone;
