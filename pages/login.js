import styled from 'styled-components';
import LoginButton from '../components/login/LoginButton';
import LoginHeader from '../components/login/LoginHeader';

const LoginContainer = styled.div`
  background-image: url('../assets/img/login_bg.jpeg');
  background: #000;
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const LoginWrap = styled.form`
  width: 500px;
  background: #fff;
  border-radius 10px;
  overflow: hidden;
  padding-left: 55px;
  padding-right: 55px;
  padding-top: 65px;
  padding-bottom: 54px;
`;

const login = () => {
  return (
    <LoginContainer>
      <LoginWrap>
        <LoginHeader/>
        <LoginButton/>
      </LoginWrap>
    </LoginContainer>
  )

}

export default login;