import { Icon } from '@iconify/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Withdrawal from './Withdrawal';
import * as S from './UserProfile.style';

interface IFormInput {
  nickname?: string;
  password?: String;
}

interface RespondsBodyUser {
  email?: string;
  nickname: string;
}

interface UserInfoProps {
  memberId: number;
  email?: string;
  nickname: string;
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
  const access = localStorage.getItem('access');
  const [userInfo, setUserInfo] = useState<UserInfoProps>();

  useEffect(() => {
    axios({
      method: 'get',
      url: '/users/mypage/userInfo',
      headers: {
        Authorization: access,
      },
    })
      .then((res) => {
        const { data } = res;
        setUserInfo(data.data);
      })
      .catch((err) => {
        console.log(`"err":${err}`);
      });
  }, []);

  const MyProfileSubmit: SubmitHandler<IFormInput> = (data) => {
    axios({
      method: 'patch',
      url: '/users',
      data: { nickname: data.nickname, password: data.password },
      headers: {
        Authorization: access,
      },
    })
      .then((res) => {
        const { data } = res;
        setUserUpdate(data.data);
        setUpdateProfile(!updateProfile);
        reset();
      })
      .catch((err) => {
        console.log(`"err":${err}`);
      });
  };

  const onClickUpdate = () => {
    setUpdateProfile(!updateProfile);
  };

  return (
    <S.MyProfileView>
      {updateProfile ? (
        <S.UserProfileUpdateBody>
          <S.ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </S.ProfileUpdateButton>
          <S.FromInputProFile onSubmit={handleSubmit(MyProfileSubmit)}>
            <label htmlFor="nickname">nickname</label>
            <S.InputProfileForm
              {...register('nickname', {
                pattern: {
                  value: /^[A-za-z0-9]{3,10}$/,
                  message: '숫자 및 영어로 3자 이상 10지 이하로 작성해주세요',
                },
              })}
            />
            <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
            <label htmlFor="password">비밀번호</label>
            <S.InputProfileForm
              {...register('password', {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{4,20}$/,
                  message: '영어대소문자 및 숫자 및 특수문자 최소 1개씩 포함하여 4-20자입니다',
                },
              })}
            />
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>

            <input type="submit" />
          </S.FromInputProFile>
        </S.UserProfileUpdateBody>
      ) : (
        <S.UserProfileUpdateBody>
          <S.ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </S.ProfileUpdateButton>
          <S.PictureProfile>
            <Icon icon="carbon:user-avatar-filled-alt" width="100%" height="100%" color="gray" />
          </S.PictureProfile>
          <div className="user-info">
            email
            <S.UserInfoFormEmail>{userInfo?.email}</S.UserInfoFormEmail>
            nickname
            <S.UserInfoFormEmail>{userUpdate ? userUpdate?.nickname : userInfo?.nickname}</S.UserInfoFormEmail>
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
