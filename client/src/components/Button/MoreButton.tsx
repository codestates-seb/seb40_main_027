import { Icon } from '@iconify/react';
import * as S from './MoreButton.style';
import { useState } from 'react';
import { BorderOtherButton } from './OtherButton';
import { GREEN_MAIN, RED_BUTTON_DELETE } from '../../assets/constant/COLOR';

export const MoreButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <S.Dropdown>
      <S.Button onClick={handleClick}>
        <Icon icon="material-symbols:more-horiz" />
      </S.Button>

      {isClicked ? (
        <S.DropdownContent>
          <BorderOtherButton text="수정" color={GREEN_MAIN} />
          <BorderOtherButton text="삭제" color={RED_BUTTON_DELETE} />
        </S.DropdownContent>
      ) : null}
    </S.Dropdown>
  );
};
