import styled from 'styled-components';
import logo from '../image/logo.png';

const HeaderLine = styled.div`
  height: 4rem;
  border-bottom: 1px solid #d6d6d6;

  img {
    margin-left: 400px;
    width: 100px;
    height: 50px;
  }
`;

const Header = () => {
  return (
    <HeaderLine>
      <img src={logo} alt="logo" />
    </HeaderLine>
  );
};

export default Header;
