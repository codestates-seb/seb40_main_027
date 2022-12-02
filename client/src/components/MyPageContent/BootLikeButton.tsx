import axios from 'axios';
import * as S from './MyPageTable.style';
import { Icon } from '@iconify/react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const BootLikeButton = () => {
  const [likeBtn, setLikeBtn] = useState(1);
  const access = localStorage.getItem('access');
  const { id } = useParams();

  const handleCancel = (event: any) => {
    event.stopPropagation();
    aysncFunc();
  };

  const getBtn = () => {
    return axios({
      method: 'get',
      url: '/users/mypage/bootcampLike',
      headers: {
        Authorization: access,
      },
    });
  };

  const postLikeBtn = (idx: number) => {
    return axios({
      method: 'post',
      url: `/bootcamp/votes/${id}?${idx}`,
      headers: {
        Authorization: access,
      },
    });
  };
  const aysncFunc = async () => {
    await postLikeBtn(0);
    const getasync = await getBtn();
  };

  const likeButtonHandler = (e: any, idx: number) => {
    aysncFunc();
  };

  return (
    <div>
      {likeBtn === 1 ? (
        <span>
          <S.LikeButton type="button" onClick={(event) => handleCancel(event)}>
            <Icon icon="ic:round-star" color="#fbb3b3" width="30" height="30" />
          </S.LikeButton>
        </span>
      ) : (
        <Icon icon="ic:round-star-border" color="#ff4343" width="30" height="30" />
      )}
    </div>
  );
};
