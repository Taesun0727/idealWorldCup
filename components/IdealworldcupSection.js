import styled from "styled-components";
import noimg from "../assets/img/noimage.jpg"
import { AiFillCaretRight, AiFillEdit, AiOutlineRise } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const IdealworldcupSection = (post) => {
  const test = () => {
    console.log(post)
  }
  return (
    <IdealWorldCupWrapper>

        <img src={noimg.src} style={{width: "100%"}}></img>

      <div style={{background: "white"}}>
        <Title>{post.post.p_title}</Title>
        <label>{post.post.p_explain}</label>
        <div>
          <button><AiFillCaretRight/>시작하기</button>
          <button><AiOutlineRise/>공유하기</button>
          <button><AiFillEdit/>수정</button>
          <button><BsFillTrashFill onClick={test}/>삭제</button>
        </div>
      </div>
    </IdealWorldCupWrapper>
  )
}

export default IdealworldcupSection;

const IdealWorldCupWrapper = styled.div`
  display: inline-block;
  width: 16.455%;
  padding: 2px;

  @media (max-width: 768px) {
    width: 45%;
    padding: 8px;
  }
`;

const Title = styled.label`
  display: block;
`;