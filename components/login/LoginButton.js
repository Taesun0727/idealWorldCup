import styled from "styled-components";

const ContainerLogin = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapLogin = styled.div`
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;

  box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
`;

const LogButtonForm = styled.div`
  position: absolute;
  z-index: 1;
  width: 300%;
  height: 100%;
  background-color: #a64bf4;
  background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
  top: 0;
  left: -100%;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

const LogButton = styled.button`
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
`;

const LoginButton = () => {
  return (
    <ContainerLogin>
      <WrapLogin>
        <LogButtonForm/>
        <LogButton>Login</LogButton>
      </WrapLogin>
    </ContainerLogin>

  )
}

export default LoginButton;