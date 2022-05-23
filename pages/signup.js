import styled, { createGlobalStyle } from 'styled-components';
import { AiOutlineLock, AiOutlineUser, AiOutlineAliwangwang } from 'react-icons/ai'
import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Router from 'next/router'

import SignButton from '../components/sign/SignButton';
import SignContainer from '../components/sign/SignContainer';
import SignForm from '../components/sign/SignForm';
import SignHeader from '../components/sign/SignHeader';
import { SIGN_UP_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';

const signup = () => {
  // const { signUpDone, signUpError, signUpLoading} = useSelector((state) => state.user);
  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { signUpDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/signin');
    }
  }, [signUpDone])
  
  const onSubmit = useCallback(() => {
    event.preventDefault();
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.')
      return setPasswordError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        nickname: nickname,
      },
    });
  }, [email, nickname, password, passwordCheck]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  return (
    <>
      <GlobalStyle/>
      <SignContainer>
        <StyleForm onSubmit={onSubmit}>
          <SignHeader>회원가입</SignHeader>
          <InputWrap>
            <InputLabel>Username</InputLabel>
            <Input placeholder="아이디 입력" value={email} required onChange={onChangeEmail}/>
            <StyledIcon><AiOutlineUser/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>password</InputLabel>
            <Input placeholder="비밀번호" value={password} required onChange={onChangePassword}/>
            <StyledIcon><AiOutlineLock/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>password-check</InputLabel>
            <Input placeholder="비밀번호 확인" value={passwordCheck} required onChange={onChangePasswordCheck}/>
            <StyledIcon><AiOutlineLock/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>Nickname</InputLabel>
            <Input placeholder="닉네입 입력" value={nickname} required onChange={onChangeNickname}/>
            <StyledIcon><AiOutlineAliwangwang/></StyledIcon>
          </InputWrap>
          <SignButton>회원가입</SignButton>
        </StyleForm>
      </SignContainer>
    </>
  )
}

export default signup;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 23px;
`;

const InputLabel = styled.span`
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
  padding-left: 7px;
`;

const Input = styled.input`
  font-size: 16px;
  color: #333333;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 55px;
  background: transparent;
  padding: 0 7px 0 43px;

  border: none;
  outline: none;
`;

const StyledIcon = styled.div`
  position: absolute;
  display: block;
  margin-top: 39px;
  margin-left: 10px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const StyleForm = styled.form`
  width: 500px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-left: 55px;
  padding-right: 55px;
  padding-top: 65px;
  padding-bottom: 54px;
`;