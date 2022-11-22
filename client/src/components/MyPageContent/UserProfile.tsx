import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

const ProfileUpdateButton = styled.button`
  border: none;
  background-color: var(--whiteBackground);
`;

const MyProfileView = styled.div`
  width: 14vw;
  border-right: 1px solid var(--grayContentsBorder);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .border-line {
    border: 1px solid gray;
    width: 100%;
    height: calc(400 / 14 * 1rem);
  }

  .user-info {
    height: 100rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 414px) {
    border: none;
    height: 100%;
  }
`;

const GrayProfileView = styled.div`
  width: 100%;
  height: 100%;
`;
const UserProfileUpdateBody = styled.div`
  width: 90%;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 0 1rem;
`;

const PictureProfile = styled.div`
  height: 13rem;
  width: 70%;
  border-radius: 50%;

  border: 1px solid black;
  margin: 5% 5% 5% 15%;
`;

const FormInputProFile = styled.form`
  width: 100%;
  background-color: var(--greenSub);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputProfileForm = styled.input`
  width: 90%;
  border: none;
  height: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const UserInfoFormEmail = styled.div`
  background-color: var(--grayHeaderBorder);
  display: inline;
  width: 100%;
  height: 2rem;
  border-radius: 10px;
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
      <GrayProfileView>
        <ProfileUpdateButton onClick={onClickUpdate}>
          <Icon icon="ph:gear-six-duotone" width="25" height="25" />
        </ProfileUpdateButton>
        <div className="border-line">
          <PictureProfile></PictureProfile>
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
              <div className="user-info">
                nickname
                <UserInfoFormEmail></UserInfoFormEmail>
                email<UserInfoFormEmail></UserInfoFormEmail>
              </div>
            </UserProfileUpdateBody>
          )}
        </div>
      </GrayProfileView>
    </MyProfileView>
  );
};

export default UserProfile;
