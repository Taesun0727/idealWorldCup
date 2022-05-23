import AppLayout from "../components/AppLayout"
import styled from "styled-components"
import DropZone from "../components/DropZone";
import noimg from "../assets/img/noimage.jpg"

import useInput from '../hooks/useInput';

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_NAME, REMOVE_IMAGE, CREATE_WORLDCUP_REQUEST } from "../reducers/post";
import Router from 'next/router'

const createworldcup = () => {
  const dispatch = useDispatch();
  const { images, createWorldcupDone } = useSelector((state) => state.post);
  
  const [title, onChangeTitle] = useInput('')
  const [explain, onChangeExplain] = useInput('')
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  })
  const onChangeImageName = useCallback((index, value) => () => {
    dispatch({
      type: CHANGE_NAME,
      data: {
        index,
        value
      }
    })
  })
  const onSubmit = useCallback(() => {
    event.preventDefault();
    dispatch({
      type: CREATE_WORLDCUP_REQUEST,
      data: {
        title,
        explain,
        images
      }
    })
  }, [title, explain, images]);

  useEffect(() => {
    if (createWorldcupDone) {
      Router.replace('/myworldcup');
    }
  }, [createWorldcupDone])

  return (
    <AppLayout>
      <BasicInfoContainer onSubmit={onSubmit}>
        <BasicInfoHead>
          <h4 style={{color: "#B4AEE8"}}>이상형월드컵 기본 정보</h4>
          <SaveButton type="submit">저장하기</SaveButton>
        </BasicInfoHead>
        <BasicInfoBody>
          <div style={{display: 'flex', width: '100%'}}>
            <StyleLabel>제목</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput value={title} required onChange={onChangeTitle}/>
              <label>월드컵에 대한 제목을 적어주세요 예) 음식 이상형 월드컵, 연예인 이상형 월드컵</label>
            </div>
          </div>
          <hr style={{border: "0.5px solid #e9ecef"}}/>
          <div style={{display: 'flex'}}>
            <StyleLabel>설명</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleTextArea value={explain} required onChange={onChangeExplain}/>
              <label>월드컵에 대한 설명을 자유롭게 써주세요</label>
            </div>
          </div>
          <hr style={{border: "0.5px solid #e9ecef"}}/>
        </BasicInfoBody>
      </BasicInfoContainer>
      <div style={{margin: '20px', padding: '20px',backgroundColor: 'white'}}>
        <DropZone></DropZone>
      </div>
      <div style={{margin: '20px', padding: '20px', backgroundColor: 'white'}}>
        <StyleTable>
          <thead>
            <tr>
              <StyleTh>이미지</StyleTh>
              <StyleTh>이름</StyleTh>
              <StyleTh>관리</StyleTh>
            </tr>
          </thead>
          <tbody>
            {images && images.map((v, i) => 
            <tr key={i}>
              <StyleTd style={{width: '50%'}}><img src={`http://localhost:3065/${v.path}`} style={{width: '100%', height: '300px'}} alt={v}/></StyleTd>
              <StyleTd style={{width: '40%'}}><input style={{width: '90%'}} value={v.filename} required onChange={onChangeImageName(i, v.filename)}/></StyleTd>
              <StyleTd style={{width: '10%', textAlign:'center'}}><ChangeButton>이미지변경</ChangeButton><DeleteButton onClick={onRemoveImage(i)}>삭제</DeleteButton></StyleTd>
            </tr>
            )}
          </tbody>
        </StyleTable>
      </div>

    </AppLayout>
  )
}

export default createworldcup

const CreateWorldcupContainer = styled.div`
  background-color: white;
  padding: 20px;
  height: 100%;
`;

const BasicInfoContainer = styled.form`
  margin: 20px;
  background-color: white;
  height: auto;
  overflow: hidden;
`

const BasicInfoHead = styled.div`
  display: flex;
  padding-left: 20px;
  border-bottom: 1px solid #e9ecef;
  align-items: center;
`;

const BasicInfoBody = styled.div`
  background-color: white;
  margin: 20px;
`;

const StyleLabel = styled.label`
  position: relative;
  width: 10%;
  padding-right: 30px;
  text-align: end;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
    margin-bottom: 10px;
  }
`;

const StyleInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  height: 25px;
  width: 100%;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
  }
`;

const StyleTextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  width: 100%;
`;

const DeleteButton = styled.button`
  border: 1px solid red;
  border-radius: 2px;
  background-color: white;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const ChangeButton = styled.button`
  border: 1px solid #0dcaf0;
  border-radius: 2px;
  background-color: white;
  height: 30px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const StyleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyleTh = styled.th`
  border: 1px solid #B4AEE8;
`;

const StyleTd = styled.td`
  border: 1px solid #B4AEE8;
  text-align: center;
`;

const SaveButton = styled.button`
  padding: 8px;
  background-color: white;
  color: black;
  border-radius: 5px;
  border: 1px solid green;
  margin: 0 1rem;
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;