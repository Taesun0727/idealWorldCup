import styled from "styled-components";

const SignTitle = styled.span`
  display: block;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
`
;
const SignHeader = ({children}) => {
  return (
    <SignTitle>{children}</SignTitle>
  )
}

export default SignHeader;