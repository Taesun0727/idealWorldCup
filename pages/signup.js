import styled, { createGlobalStyle } from 'styled-components';
import bg from '../assets/img/login_bg.jpg'
import SignButton from '../components/sign/SignButton';
import SignContainer from '../components/sign/SignContainer';
import SignForm from '../components/sign/SignForm';
import SignHeader from '../components/sign/SignHeader';
import { AiOutlineLock, AiOutlineUser, AiOutlineAliwangwang } from 'react-icons/ai'

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

const signup = () => {
  return (
    <>
      <GlobalStyle/>
      <SignContainer>
        <SignForm>
          <SignHeader>회원가입</SignHeader>
          <InputWrap>
            <InputLabel>Username</InputLabel>
            <Input placeholder="아이디 입력"/>
            <StyledIcon><AiOutlineUser/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>password</InputLabel>
            <Input placeholder="비밀번호"/>
            <StyledIcon><AiOutlineLock/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>password-check</InputLabel>
            <Input placeholder="비밀번호 확인"/>
            <StyledIcon><AiOutlineLock/></StyledIcon>
          </InputWrap>
          <InputWrap>
            <InputLabel>Nickname</InputLabel>
            <Input placeholder="닉네입 입력"/>
            <StyledIcon><AiOutlineAliwangwang/></StyledIcon>
          </InputWrap>
          <SignButton>회원가입</SignButton>
        </SignForm>
      </SignContainer>
    </>
  )
}

export default signup;