import Navbar from "./Navbar";
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const AppLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  )
}

export default AppLayout;