import axios from 'axios';
import * as S from './MyPageTable.style';
import { Icon } from '@iconify/react';
import { useSetRecoilState } from 'recoil';

import { bootListMyPage } from '../../atoms/index';

interface BootDataProps {
  bootcampId: number;
}

export const BootLikeButton = ({ bootcampId }: BootDataProps) => {
  const setBootList = useSetRecoilState(bootListMyPage);
  const access = localStorage.getItem('access');

  //z-index 찜버튼을 부모것보다 높게 가져오게? onclick을 한번 다시 써보기 =>둘다 같이 작용함 실패

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    aysncFunc();
    event.stopPropagation();
    window.location.reload();
  };

  const getBtn = () => {
    return axios({
      method: 'get',
      url: '/users/mypage/bootcampLike?page=1&size=10', //무한스크롤로 인해 페이지 1만 불러옴
      headers: {
        Authorization: access,
      },
    });
  };

  const postLikeBtn = () => {
    return axios({
      method: 'post',
      url: `/bootcamp/votes/${bootcampId}?vote=0`,
      headers: {
        Authorization: access,
      },
    });
  };
  const aysncFunc = async () => {
    await postLikeBtn();
    const getAsync = await getBtn();
    setBootList(getAsync.data.data);
  };

  return (
    <div>
      <span>
        <S.LikeButton type="button" onClick={(event) => handleCancel(event)}>
          <Icon icon="ic:round-star" color="#fbb3b3" width="30" height="30" />
        </S.LikeButton>
      </span>
    </div>
  );
};
