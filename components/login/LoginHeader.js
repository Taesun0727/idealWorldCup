import styled from "styled-components";

const LoginTitle = styled.span`
  display: block;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
`
;
const LoginHeader = () => {
  return (
    <LoginTitle>로그인</LoginTitle>
  )
}

export default LoginHeader;