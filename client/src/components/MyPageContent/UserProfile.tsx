import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const MyProfileView = styled.div`
  //전체 길이
  width: 16vw;
  border-right: 1px solid var(--grayContentsBorder);
  height: 100vh;
  display: flex;
  flex-direction: column;

  .user-info {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 414px) {
    border: none;
    height: 100%;
    display: flex;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .user-info {
      width: 100vw;
      height: 20vh;
      margin: 0;
    }
  }
`;

const ProfileUpdateButton = styled.button`
  border: none;
  background-color: var(--whiteBackground);
  display: flex;
  justify-content: flex-start;
`;

const UserProfileUpdateBody = styled.div`
  //프로필 전체크기
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: aquamarine;
  border: 1px solid gray;

  @media screen and (max-width: 414px) {
    justify-content: center;
    height: 20vh;
    flex-direction: row;
  }
`;

const PictureProfile = styled.span`
  height: 20vh;
  width: 70%;

  display: flex;
  border: 1px solid black;
  margin: 0% 0% 1% 10%;
  @media screen and (max-width: 414px) {
    height: 100%;
    margin: 0;
  }
`;

const FormInputProFile = styled.form`
  width: 100%;
  background-color: var(--greenSub);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  height: 100%;
  @media screen and (max-width: 414px) {
    height: 100%;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }
`;
const InputProfileForm = styled.input`
  width: 90%;
  border: none;
  height: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  @media screen and (max-width: 414px) {
    margin: 0;
    height: 1rem;
    width: 80%;
  }
`;

const UserInfoFormEmail = styled.span`
  background-color: var(--grayHeaderBorder);
  display: inline;
  width: 100%;
  height: 2rem;
  border-radius: 10px;
  @media screen and (max-width: 414px) {
  }
`;

interface IFormInput {
  nickname: String;
  email: String;
  password: String;
}

const UserProfile = () => {
  const { register, setValue, handleSubmit } = useForm<IFormInput>();
  const [updateProfile, setUpdateProfile] = useState<boolean>(false);
  console.log(setValue);

  const MyProfileSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    axios.defaults.withCredentials = true;
    axios({
      method: 'Patch',
      url: '/users/1',
      data: data,
      headers: {},
    })
      .then((res) => {
        console.log(res);
        setUpdateProfile(!updateProfile);
      })
      .catch((err) => console.log('err'));
  };

  const onClickUpdate = () => {
    setUpdateProfile(!updateProfile);
  };

  return (
    <MyProfileView>
      <ProfileUpdateButton onClick={onClickUpdate}>
        <Icon icon="ph:gear-six-duotone" width="25" height="25" />
      </ProfileUpdateButton>

      {updateProfile ? (
        <UserProfileUpdateBody>
          <FormInputProFile onSubmit={handleSubmit(MyProfileSubmit)}>
            <label htmlFor="email">email</label>
            <InputProfileForm {...register('email')} />
            <label htmlFor="nickname">nickname</label>
            <InputProfileForm {...register('nickname')} />
            <label htmlFor="password">비밀번호</label>
            <InputProfileForm {...register('password')} />

            <input type="submit" />
          </FormInputProFile>
        </UserProfileUpdateBody>
      ) : (
        <UserProfileUpdateBody>
          <PictureProfile></PictureProfile>
          <div className="user-info">
            nickname
            <UserInfoFormEmail></UserInfoFormEmail>
            email<UserInfoFormEmail></UserInfoFormEmail>
          </div>
        </UserProfileUpdateBody>
      )}
    </MyProfileView>
  );
};

export default UserProfile;
