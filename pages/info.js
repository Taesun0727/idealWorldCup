import AppLayout from "../components/AppLayout";

import { useState, useCallback, useEffect } from 'react';
import styled from "styled-components";
import wrapper from "../store/configureStore";
import axios from "axios";
import { CHANGE_MY_INFO_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { END } from "redux-saga";
import useInput from '../hooks/useInput';
import Router from 'next/router'
import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput(me?.mb_email || '');
  const [nickname, onChangeNickname] = useInput(me?.mb_nickname || '');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  useEffect(() => {
    if (!me) {
      alert('로그인이 필요합니다.')
      Router.replace('/signin');
    } else {
    }
  })

  const onSubmit = useCallback(() => {
    event.preventDefault();
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
      return setPasswordError(true);
    }
    dispatch({
      type: CHANGE_MY_INFO_REQUEST,
      data: {
        nickname,
        password
      }
    })
  })

  return (
    <AppLayout>
      <InfoForm onSubmit={onSubmit}>
        <InfoHead>
          <h4>내 정보</h4>
        </InfoHead>
        <InfoBody>
          <InputWrap>
            <StyleLabel>이메일</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput value={email} readOnly />
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>닉네임</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput value={nickname} required onChange={onChangeNickname}/>
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>비밀번호</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput value={password} required onChange={onChangePassword}/>
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>비밀번호확인</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput value={passwordCheck} required onChange={onChangePasswordCheck}/>
            </div>
          </InputWrap>
        </InfoBody>
        <InfoTail>
          <SignoutButton>탈퇴하기</SignoutButton>
          <ModifyButton type="submit">변경하기</ModifyButton>
        </InfoTail>
      </InfoForm>
    </AppLayout>
  )

}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = ''

  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Info;

const ModifyButton = styled.button`
  padding: 8px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border: none;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const SignoutButton = styled.button`
  padding: 8px;
  background-color: red;
  color: white;
  border-radius: 5px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const InfoForm = styled.form`
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  height: auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 15px;
  }
`;

const InfoHead = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const InfoBody = styled.div`
  padding: 0px 20px;
  border-bottom: 1px solid #e9ecef;
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

const InfoTail = styled.div`
  margin: 20px;
`;

const StyleLabel = styled.label`
  position: relative;
  width: 30%;
  padding-right: 30px;
  text-align: end;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
    margin-bottom: 10px;
  }
`;

const StyleHr = styled.hr`
  border: 0.5px solid #e9ecef;
`;

const InputWrap = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 20px;
    float: left;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`;

const StyleInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  height: 25px;
  width: 70%;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
  }
`;