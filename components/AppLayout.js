import Navbar from "./Navbar";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: #f3f3f4;
    height: 100%;
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