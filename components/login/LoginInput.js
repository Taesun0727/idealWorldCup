import styled from "styled-components";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  display: block;
  margin-top: 30px;
  margin-left: 10px;
  height: 35%;
  top: 0;
  left: 0;
  pointer-events: none;

`;

const LoginInput = () => {
  return (
    <InputWrap>
      <InputLabel>Username</InputLabel>
      <Input placeholder="아이디를 입력해주세요"/>
      <StyledIcon icon={faUser}/>
    </InputWrap>
  )
}

export default LoginInput;