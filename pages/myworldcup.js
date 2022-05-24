import { useEffect } from 'react';
import AppLayout from "../components/AppLayout"
import styled from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai'
import Link from "next/link"
import IdealworldcupSection from "../components/IdealworldcupSection"
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'
import { LOAD_MY_POST_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore'
import axios from "axios";
import { END } from 'redux-saga'

const myworldcup = () => {
  const dispatch = useDispatch();
  const { myposts } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      alert('로그인이 필요합니다.')
      Router.replace('/signin');
    } else {
      const userId = me.id
      dispatch({
        type: LOAD_MY_POST_REQUEST,
        userId
      })
    }
  }, [])

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        const lastid = posts[posts.length - 1]?.id;
        dispatch({
          type: LOAD_POST_REQUEST,
          lastid
        })
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  })

  return (
    <AppLayout>
      <MyworldcupHeader>
        <HeaderDiv1>
          <PopularSortButton>인기순</PopularSortButton>
          <RecentSortButton>최신순</RecentSortButton>
        </HeaderDiv1>
        <HeaderDiv2>
          <SearchInput/>
          <SearchButton><AiOutlineSearch/></SearchButton>
        </HeaderDiv2>
        <HeaderDiv3>
          <StyleLink href='/createworldcup'><WorldcupCreateButton>내 이상형 월드컵 만들기</WorldcupCreateButton></StyleLink>
        </HeaderDiv3>
      </MyworldcupHeader>
      <MyworldcupBody>
        {myposts.map((post) => <IdealworldcupSection key={post.id} post={post}></IdealworldcupSection>)}
      </MyworldcupBody>
    </AppLayout>
  )
}

export default myworldcup;

export const MyworldcupHeader = styled.div`
  margin: 40px 20px;
`;

export const MyworldcupBody = styled.div`
  margin: 15px;
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

export const SearchButton = styled(Button)`
  width: 20%;
`;

const WorldcupCreateButton = styled(Button)`
  float: right;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  height: 25px;
  width: 75%;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Div = styled.div`
  display: inline-block;
`;

export const HeaderDiv1 = styled(Div)`
  width: 20%;
  text-align: end;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderDiv2 = styled(Div)`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderDiv3 = styled(Div)`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PopularSortButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RecentSortButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;