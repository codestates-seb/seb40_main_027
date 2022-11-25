import styled from 'styled-components';
import { StyledBorderButton } from '../components/Button/BorderButton';

export const WithdrawalButton = styled(StyledBorderButton)`
  width: 84px;
  height: 36px;
  border-radius: 9px;
  font-size: 20px;
  color: red;
  border: 1px solid red;

  @media screen and (max-width: 414px) {
    width: 50px;
    height: 18px;
    border-radius: 4.5px;
    font-size: 10px;
  }
`;
