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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ mode: 'onBlur' });
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  const [userUpdate, setUserUpdate] = useState<RespondsBodyUser | undefined>();

  const MyProfileSubmit: SubmitHandler<IFormInput> = (data) => {
    axios({
      method: 'patch',
      url: '/users',
      data: { data },
    })
      .then((res) => {
        const dataType = res.data;
        setUserUpdate(dataType);
        setUpdateProfile(!updateProfile);
        reset();
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
            <S.InputProfileForm
              {...register('email', {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message: '이메일 형식으로 입력해주세요',
                },
              })}
            />
            <div>{errors.email?.message}</div>
            <label htmlFor="nickname">nickname</label>
            <S.InputProfileForm
              {...register('nickname', {
                pattern: {
                  value: /^[A-za-z0-9]{3,10}$/,
                  message: '숫자 및 영어로 3자 이상 10지 이하로 작성해주세요',
                },
              })}
            />
            <div>{errors.nickname?.message}</div>
            <label htmlFor="password">비밀번호</label>
            <S.InputProfileForm
              {...register('password', {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,20}$/,
                  message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                },
              })}
            />
            <div>{errors.password?.message}</div>

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
