import { useState } from 'react';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react';
import { StyledBorderButton } from './BorderButton';

const StyledButton = styled(StyledBorderButton)`
  width: 90px;
  height: 36px;
  border-radius: 6px;
  font-size: 15px;
  color: var(--blackTextNormal);

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (max-width: 414px) {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    font-size: 13px;

    & > svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const StyledTextContainer = styled.span`
  width: 100%;
`;

export const FilterButton = ({ conditions = ['최신순', '좋아요순'] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledButton color="#B6B6B6" onClick={dropdownHandler}>
      {isDropdownOpen ? <InlineIcon icon="akar-icons:chevron-up" /> : <InlineIcon icon="akar-icons:chevron-down" />}
      <StyledTextContainer>{conditions[0]}</StyledTextContainer>
    </StyledButton>
  );
};
