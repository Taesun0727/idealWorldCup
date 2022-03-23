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
`;

const InfoHead = styled.div`
  padding-left: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const InfoBody = styled.div`
  border-bottom: 1px solid #e9ecef;
`;

const InfoTail = styled.div`
margin: 20px;
`;

const InputWrap = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 768px) {
    float: left;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
            <label>이메일</label>
            <div>
            <input readOnly />
            </div>
          </InputWrap>
          <InputWrap>
            <label>닉네임</label>
            <div>
            <input></input>
            </div>
          </InputWrap>
          <InputWrap>
            <label>비밀번호</label>
            <div>
            <input></input>
            </div>
          </InputWrap>
          <InputWrap>
            <label>비밀번호확인</label>
            <div>
            <input></input>
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