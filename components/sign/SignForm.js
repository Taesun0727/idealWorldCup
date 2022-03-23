import styled from "styled-components";

const Form = styled.div`
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
    <Form>
      {children}
    </Form>
  )
}

export default SignForm;