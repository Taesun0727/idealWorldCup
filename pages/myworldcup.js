import AppLayout from "../components/AppLayout"
import noimg from "../assets/img/noimage.jpg"
import styled from "styled-components"
import { AiOutlineSearch, AiFillCaretRight, AiFillEdit, AiOutlineRise } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const Title = styled.label`
  display: block;
`;

const MyworldcupHeader = styled.div`
  margin: 40px 20px;
`;

const MyworldcupBody = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  background-color: white;
  border: 1px solid #B4AEE8;
  border-radius: 5px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const WorldcupCreateButton = styled(Button)`
  float: right;
`;

const StyleInput = styled.input`
  height: 25px;
`;

const myworldcup = () => {
  return (
    <AppLayout>
      <MyworldcupHeader>
        <Button>인기순</Button>
        <Button>최신순</Button>
        <StyleInput/>
        <Button><AiOutlineSearch/></Button>
        <WorldcupCreateButton>내 이상형 월드컵 만들기</WorldcupCreateButton>
      </MyworldcupHeader>
      <MyworldcupBody>
        <div style={{display: "inline-block"}}>
          <div>
            <img src={noimg.src}></img>
          </div>
          <div style={{background: "white"}}>
            <Title>타이틀</Title>
            <label>내용</label>
            <div>
              <button><AiFillCaretRight/>시작하기</button>
              <button><AiOutlineRise/>공유하기</button>
              <button><AiFillEdit/>수정</button>
              <button><BsFillTrashFill/>삭제</button>
            </div>
          </div>
        </div>
        <div style={{display: "inline-block"}}>
          <div>
            <img src={noimg.src}></img>
          </div>
          <div style={{background: "white"}}>
            <Title>타이틀</Title>
            <label>내용</label>
            <div>
              <button><AiFillCaretRight/>시작하기</button>
              <button><AiOutlineRise/>공유하기</button>
              <button><AiFillEdit/>수정</button>
              <button><BsFillTrashFill/>삭제</button>
            </div>
          </div>
        </div>
      </MyworldcupBody>
    </AppLayout>
  )
}

export default myworldcup;
