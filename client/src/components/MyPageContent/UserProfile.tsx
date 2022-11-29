import { Icon } from '@iconify/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Withdrawal from '../Withdrawal';
import * as S from './UserProfile.style';

interface IFormInput {
  nickname: String;
  email: String;
  password?: String;
}

interface RespondsBodyUser {
  data: {
    email: String;
    nickname: String;
  };
}

const UserProfile = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  const [userUpdate, setUserUpdate] = useState<RespondsBodyUser | undefined>();

  const MyProfileSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'patch',
      url: '/users',
      data: { data },
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTQ4MTI0OSwiZXhwIjoxNjY5NTI0NDQ5fQ.Fwfii5XFjTe_6W9Zm20h8rDG0Wvrr-EEBOI7sLQl9rJiwNPAPeEJBRk4DkkEAZwoLkeZvgPQZcYHbNBbM1S-TQ',
      },
    })
      .then((res) => {
        const datatype = res.data;
        setUserUpdate(datatype);
        setUpdateProfile(!updateProfile);
      })
      .catch(() => console.log('err'));
  };

  const onClickUpdate = () => {
    setUpdateProfile(!updateProfile);
  };

  //밑에 보이는 칸에 기존로그인 정보가 있으면 그걸 넣고 만약 변경시 새로운 데이터가 들어가는 조건문을 로그인이 구현시 짜줄예정
  return (
    <S.MyProfileView>
      {updateProfile ? (
        <S.UserProfileUpdateBody>
          <S.ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </S.ProfileUpdateButton>
          <S.FromInputProFile onSubmit={handleSubmit(MyProfileSubmit)}>
            <label htmlFor="email">email</label>
            <S.InputProfileForm {...register('email')} />
            <label htmlFor="nickname">nickname</label>
            <S.InputProfileForm {...register('nickname')} />
            <label htmlFor="password">비밀번호</label>
            <S.InputProfileForm {...register('password')} />

            <input type="submit" />
          </S.FromInputProFile>
        </S.UserProfileUpdateBody>
      ) : (
        <S.UserProfileUpdateBody>
          <S.ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </S.ProfileUpdateButton>
          <S.PictureProfile></S.PictureProfile>
          <div className="user-info">
            email
            <S.UserInfoFormEmail>{userUpdate ? userUpdate.data.email : 'a'}</S.UserInfoFormEmail>
            nickname<S.UserInfoFormEmail>{userUpdate ? userUpdate.data.nickname : 'a'}</S.UserInfoFormEmail>
          </div>
        </S.UserProfileUpdateBody>
      )}
      <S.WithdrawArea>
        <Withdrawal />
      </S.WithdrawArea>
    </S.MyProfileView>
  );
};

export default UserProfile;
