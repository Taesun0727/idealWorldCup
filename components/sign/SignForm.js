import styled from "styled-components";

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

const SignForm = ({ children }) => {
  return (
    <StyleForm onSubmit={onSubmit}>
      {children}
    </StyleForm>
  )
}

export default SignForm;