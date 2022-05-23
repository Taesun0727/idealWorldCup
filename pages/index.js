import { useEffect } from 'react';
import axios from "axios";
import { END } from 'redux-saga'

import AppLayout from "../components/AppLayout";
import wrapper from '../store/configureStore'
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { HeaderDiv1, HeaderDiv2, MyworldcupBody, MyworldcupHeader, PopularSortButton, RecentSortButton, SearchButton, SearchInput } from "./myworldcup";
import { useSelector } from "react-redux";
import IdealworldcupSection from "../components/IdealworldcupSection";
import { AiOutlineSearch } from "react-icons/ai";
import { LOAD_POST_REQUEST } from '../reducers/post';

const Home = () => {
  const { posts } = useSelector((state) => state.post)

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
      </MyworldcupHeader>
      <MyworldcupBody>
        {posts.map((post) => <IdealworldcupSection key={post.id} post={post}></IdealworldcupSection>)}
      </MyworldcupBody>
    </AppLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = ''

  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;