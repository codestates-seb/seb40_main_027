import { useState } from 'react';
import { InlineIcon } from '@iconify/react';
import * as S from './FilterButton.style';
import { GRAY_CONTENTS_BORDER } from '../../assets/constant/COLOR';

export const FilterButton = () => {
  const conditions = ['최신순', '좋아요순'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.Button color={GRAY_CONTENTS_BORDER} onClick={dropdownHandler}>
      {isDropdownOpen ? <InlineIcon icon="akar-icons:chevron-up" /> : <InlineIcon icon="akar-icons:chevron-down" />}
      <S.TextContainer>{conditions[0]}</S.TextContainer>
    </S.Button>
  );
};
