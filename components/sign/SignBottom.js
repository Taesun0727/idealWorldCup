import Link from 'next/link';
import styled from 'styled-components';


const BottomTemplate = styled.div`
  text-align: center;
  color: white;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const SignBottom = () => {
  return (
    <BottomTemplate>
      <Link href="/signup"><StyledLink>회원가입</StyledLink></Link>
    </BottomTemplate>
  )

}

export default SignBottom;