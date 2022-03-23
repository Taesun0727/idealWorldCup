import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react'

const Nav = styled.div`
  display: flex;

  align-items: center;
  background-color: #B4AEE8;
  padding: 8px 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px
  }
`;

const Navbar_logo = styled.div`
  font-size: 24px;
  color: red;
  margin-right: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Navbar_menu = styled.div`
  display: flex;
  list-style: none;
  padding-left: 0;

  @media (max-width: 768px) {
    display: ${({ On }) => (On ? 'none' : 'block')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
`;

const Menu = styled.div`
  padding: 8px 12px;

  &:hover {
    background-color: #C7C1DB;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Tab = styled.a`
  display: none;
  color: white;
  position: absolute;
  right: 20px;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [On, setOn] = useState(false);
  const Toggle = () => {
    setOn(!On);
  }

  return (
    <Nav>
      <Navbar_logo>
        <FontAwesomeIcon icon={faSun} />
        <StyledLink href="/">SUNNY</StyledLink>
      </Navbar_logo>
      <Navbar_menu On={ On }>
        <Menu><Link href='/info'><StyledLink>내 정보</StyledLink></Link></Menu>
        <Menu><Link href='/'><StyledLink>내가 즐긴 이상형월드컵</StyledLink></Link></Menu>
        <Menu><Link href='/myworldcup'><StyledLink>내 이상형 월드컵</StyledLink></Link></Menu>
        <Menu><Link href="/signin"><StyledLink>Login</StyledLink></Link></Menu>
      </Navbar_menu>
      <Tab href='#' onClick={ Toggle }><FontAwesomeIcon icon={faBars} /></Tab>
    </Nav>
  )
}

export default Navbar;