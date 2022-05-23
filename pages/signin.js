import styled, { createGlobalStyle } from 'styled-components';
import SignButton from '../components/sign/SignButton';
import SignHeader from '../components/sign/SignHeader';
import SignContainer from '../components/sign/SignContainer';
import SignForm from '../components/sign/SignForm';
import SignBottom from '../components/sign/SignBottom';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';
import Router from 'next/router'

const login = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { signInDone, signInError } = useSelector((state) => state.user);

  const onSubmit = useCallback(() => {
    event.preventDefault();
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  useEffect(() => {
    if (signInError) {
      alert(signInError);
    }
  }, [signInError]);

  useEffect(() => {
    if (signInDone) {
      Router.replace('/');
    }
  }, [signInDone])

  return (
    <>
    <GlobalStyle />
    <SignContainer>
      <StyleForm onSubmit={onSubmit}>
        <SignHeader>로그인</SignHeader>
        <InputWrap>
          <InputLabel>Username</InputLabel>
          <Input placeholder="아이디를 입력해주세요" value={email} required onChange={onChangeEmail}/>
          <StyledIcon><AiOutlineUser/></StyledIcon>
        </InputWrap>
        <InputWrap>
          <InputLabel>Password</InputLabel>
          <Input placeholder="패스워드를 입력해주세요" value={password} required onChange={onChangePassword}/>
          <StyledIcon><AiOutlineLock/></StyledIcon>
        </InputWrap>
        <SignButton>LOGIN</SignButton>
        <SignBottom>LOGIN</SignBottom>
      </StyleForm>
    </SignContainer>
    </>
  )
}

export default login;

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