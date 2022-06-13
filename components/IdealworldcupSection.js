import styled from "styled-components";
import noimg from "../assets/img/noimage.jpg"
import { AiFillCaretRight, AiFillEdit, AiOutlineRise } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { useSelector } from "react-redux";
import Link from "next/link"

const IdealworldcupSection = (post) => {
  const id = useSelector((state) => state.user.me?.id);
  const log = () => {
    console.log(post)
  }

  return (
    <IdealWorldCupWrapper>
      <div style={{background: "white"}}>
        <img src={noimg.src} style={{width: "100%"}}></img>
        <Title>{post.post.p_title}</Title>
        <label>{post.post.p_explain}</label>
        <div>
          <StyleLink href={{pathname: 'playworldcup', query: {id: post.post.id}}} passHref><StartButton><AiFillCaretRight/>시작하기</StartButton></StyleLink>
          <ShareButton onClick={log}><AiOutlineRise/>공유하기</ShareButton>
          { id && post.post.userId === id ? <StyleLink href={{pathname: 'createworldcup', query: {id: post.post.id}}} passHref><ModifyButton><AiFillEdit/>수정</ModifyButton></StyleLink> : <></>}
          { id && post.post.userId === id ? <DeleteButton><BsFillTrashFill/>삭제</DeleteButton> : <></>}
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

const StyleButton = styled.button`
  line-height: 1.5;
  height: 30px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid;
  &:hover {
    cursor: pointer;
  }
`;

const StartButton = styled(StyleButton)`
  border-color: #B4AEE8;
  color: #B4AEE8;
`;

const ShareButton = styled(StyleButton)`
  border-color: #1c84c6;
  color: #1c84c6;
`;

const ModifyButton = styled(StyleButton)`
  border-color: #23c6c8;
  color: #23c6c8;
`;

const DeleteButton = styled(StyleButton)`
  border-color: #ed5565;
  color: #ed5565;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;