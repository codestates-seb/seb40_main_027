import { useState } from 'react';
import { InlineIcon } from '@iconify/react';
import * as S from './FilterButton.style';
import { GRAY_CONTENTS_BORDER } from '../../assets/constant/COLOR';
import { readAllPosts } from '../../utils/api/forumAPI';

interface PropsType {
  pageType: string;
  url: string;
  setPosts: React.Dispatch<any>;
}

export const FilterButton = ({ pageType, url, setPosts }: PropsType) => {
  const forumType = url.split('/')[1].split('?')[0];
  const CONDITIONS = [
    {
      id: 0,
      text: '최신순',
      condition: `${forumType}Id`,
    },
    {
      id: 1,
      text: '좋아요순',
      condition: 'totalVotes',
    },
    {
      id: 2,
      text: '조회순',
      condition: 'view',
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [current, setCurrent] = useState(CONDITIONS[0]);

  const dropdownHandler = () => {
    if (pageType !== 'bootcamp') {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleCurrent = (id: number) => {
    const newCurrent = CONDITIONS.filter((condition) => condition.id === id)[0];
    setCurrent(newCurrent);
    setIsDropdownOpen(!isDropdownOpen);
    readAllPosts(`${url}&sort=${newCurrent.condition}`, setPosts);
  };

  return (
    <S.Dropdown>
      <S.Button color={GRAY_CONTENTS_BORDER} onClick={dropdownHandler}>
        {isDropdownOpen ? <InlineIcon icon="akar-icons:chevron-up" /> : <InlineIcon icon="akar-icons:chevron-down" />}
        <S.TextContainer>{current.text}</S.TextContainer>
      </S.Button>

      {isDropdownOpen ? (
        <S.DropdownContent>
          {CONDITIONS.map((condition) => {
            if (current.text === condition.text) {
              return <S.SelectedButton key={condition.id}>{condition.text}</S.SelectedButton>;
            }
            return (
              <button key={condition.id} onClick={() => handleCurrent(condition.id)}>
                {condition.text}
              </button>
            );
          })}
        </S.DropdownContent>
      ) : null}
    </S.Dropdown>
  );
};
