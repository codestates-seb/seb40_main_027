import styled from 'styled-components';
import theme from '../../styles/theme';
import { Icon } from '@iconify/react';

const StyledBtn = styled.button`
  width: 122px;
  height: 59px;
  border: none;
  border-radius: 4.5px;
  background-color: var(--grayBootButton);
  margin: calc(100% / 30) 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.mobile} {
    font-size: 15px;
    height: 50px;
    width: 99px;
  }
  svg {
    width: 30px;
  }
`;

interface PropsType {
  text?: string;
  onClick?: any;
  icon?: any;
  iconColor?: string;
}

/** text: 글자, onClick: 함수, icon: iconify 이름, iconColor: icon 색 **/
export const BootDetailButton = ({ text, onClick, icon, iconColor }: PropsType) => {
  return (
    <StyledBtn onClick={onClick}>
      {text}
      <Icon icon={icon} color={iconColor} />
    </StyledBtn>
  );
};
