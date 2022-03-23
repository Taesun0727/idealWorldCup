import Navbar from "./Navbar";
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: #f3f3f4;
  }
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  )
}

export default AppLayout;