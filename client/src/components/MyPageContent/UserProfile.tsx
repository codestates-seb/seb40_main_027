import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Logout from '../Logout';
import Withdrawal from '../Withdrawal';

const MyProfileView = styled.div`
  //전체 길이
  width: 16vw;
  border-right: 1px solid var(--grayContentsBorder);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .user-info {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem 0 1rem;
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
      margin: 0 1rem 0 0;
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
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* background-color: aquamarine; */
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
  margin: 0% 0% 1% 15%;
  @media screen and (max-width: 414px) {
    height: 100%;
    margin: 0 1rem 0 0;
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
  display: flex;
  align-items: center;

  height: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (max-width: 414px) {
  }
`;

const WithdrawArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

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

  const MyProfileSubmit: SubmitHandler<IFormInput> = (data: any) => {
    console.log(data);
    axios.defaults.withCredentials = true;
    axios({
      method: 'patch',
      url: '/users',
      data: { data },
      headers: {
        // 'content-type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoibGFsYUBnbWFpbC5jb20iLCJzdWIiOiJsYWxhQGdtYWlsLmNvbSIsImlhdCI6MTY2OTE4MTg3NywiZXhwIjoxNjY5MjI1MDc3fQ.YZIFOGbutYKeFh3UKwOcFwfuVu7Azj6waCoh5D_2JmQ84oSdZ7YI3ODtZvHP2pMTydSp9dFK4voAu4moqWKbLw',
      },
    })
      .then((res) => {
        console.log(res);
        let datatype = res.data;
        console.log(datatype);
        setUserUpdate(datatype);
        setUpdateProfile(!updateProfile);
      })
      .catch((err) => console.log('err'));
  };

  const onClickUpdate = () => {
    setUpdateProfile(!updateProfile);
  };

  //{userUpdate.data.nickname}
  //{userUpdate.data.email}

  //밑에 보이는 칸에 기존로그인 정보가 있으면 그걸 넣고 만약 변경시 새로운 데이터가 들어가는 조건문을 로그인이 구현시 짜줄예정
  return (
    <MyProfileView>
      {updateProfile ? (
        <UserProfileUpdateBody>
          <ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </ProfileUpdateButton>
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
          <ProfileUpdateButton onClick={onClickUpdate}>
            <Icon icon="ph:gear-six-duotone" width="25" height="25" />
          </ProfileUpdateButton>
          <PictureProfile></PictureProfile>
          <div className="user-info">
            email
            <UserInfoFormEmail>{userUpdate ? userUpdate.data.email : 'a'}</UserInfoFormEmail>
            nickname<UserInfoFormEmail>{userUpdate ? userUpdate.data.nickname : 'a'}</UserInfoFormEmail>
          </div>
        </UserProfileUpdateBody>
      )}
      <WithdrawArea>
        <Withdrawal />
      </WithdrawArea>
    </MyProfileView>
  );
};

export default UserProfile;
