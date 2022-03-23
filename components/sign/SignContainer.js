import styled from "styled-components";
import bg from "../../assets/img/login_bg.jpg"

const SignLayout = styled.div`
  background-image: url(${bg.src});
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

const SignContainer = ({ children }) => {
  return (
    <SignLayout>
      {children}
    </SignLayout>
  )
}

export default SignContainer;