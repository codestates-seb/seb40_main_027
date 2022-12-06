import { Icon } from '@iconify/react';
import * as S from './MoreButton.style';
import { useState } from 'react';
import { BorderOtherButton } from './OtherButton';
import { GREEN_MAIN, RED_BUTTON_DELETE } from '../../assets/constant/COLOR';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { logUser } from '../../atoms';
import { deletePost } from '../../utils/api/forumAPI';

interface PropsType {
  buttonType: 'post' | 'comment';
  forumType: string;
  id: number;
  tagName?: string;
  title?: string;
  content?: string;
  author?: string;
}

export const MoreButton = ({ buttonType, forumType, id, tagName, title, content, author }: PropsType) => {
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const { nickname, memberRole } = useRecoilValue(logUser);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleUpdate = () => {
    navigate(`/${forumType}/update`, { state: { id, tagName, title, content } });
  };

  const handleDelete = () => {
    if (buttonType === 'post' && (author === nickname || memberRole === 'ADMIN')) {
      if (window.confirm('게시글을 삭제하시겠습니까?')) {
        const url = `/${forumType}/${id}`;
        deletePost(url, navigate);
      }
    }
  };

  return (
    <S.Dropdown>
      <S.Button onClick={handleClick}>
        <Icon icon="material-symbols:more-horiz" />
      </S.Button>

      {isClicked ? (
        <S.DropdownContent>
          <BorderOtherButton text="수정" color={GREEN_MAIN} onClick={handleUpdate} />
          <BorderOtherButton text="삭제" color={RED_BUTTON_DELETE} onClick={handleDelete} />
        </S.DropdownContent>
      ) : null}
    </S.Dropdown>
  );
};
