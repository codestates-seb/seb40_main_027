import styled from 'styled-components';
import { StyledBackgroundButton } from './BackgroundButton';

export const LogoutButton = styled(StyledBackgroundButton)`
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;
  @media screen and (max-width: 414px) {
    width: 70px;
    height: 30px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;
