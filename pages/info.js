import AppLayout from "../components/AppLayout";
import styled from "styled-components";

const ModifyButton = styled.button`
  padding: 8px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border: none;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const SignoutButton = styled.button`
  padding: 8px;
  background-color: red;
  color: white;
  border-radius: 5px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const InfoForm = styled.div`
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  height: auto;
  display: block;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 15px;
  }
`;

const InfoHead = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const InfoBody = styled.div`
  padding: 0px 20px;
  border-bottom: 1px solid #e9ecef;
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

const InfoTail = styled.div`
  margin: 20px;
`;

const StyleLabel = styled.label`
  position: relative;
  width: 30%;
  padding-right: 30px;
  text-align: end;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
    margin-bottom: 10px;
  }
`;

const StyleHr = styled.hr`
  border: 0.5px solid #e9ecef;
`;

const InputWrap = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 20px;
    float: left;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`;

const StyleInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  height: 25px;
  width: 70%;
  @media (max-width: 768px) {
    text-align: start;
    width: 90%;
  }
`;

const Info = () => {
  return (
    <AppLayout>
      <InfoForm>
        <InfoHead>
          <h4>내 정보</h4>
        </InfoHead>
        <InfoBody>
          <InputWrap>
            <StyleLabel>이메일</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput readOnly />
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>닉네임</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput/>
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>비밀번호</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput/>
            </div>
          </InputWrap>
          <StyleHr/>
          <InputWrap>
            <StyleLabel>비밀번호확인</StyleLabel>
            <div style={{width: '100%'}}>
              <StyleInput/>
            </div>
          </InputWrap>
        </InfoBody>
        <InfoTail>
          <SignoutButton>탈퇴하기</SignoutButton>
          <ModifyButton>변경하기</ModifyButton>
        </InfoTail>
        
      </InfoForm>

    </AppLayout>
  )

}

export default Info;