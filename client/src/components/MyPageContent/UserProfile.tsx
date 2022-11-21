import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { StyledBackgroundButton } from '../Button/BackgroundButton';

const ProfileUpdateButton = styled.button`
  border: none;
  background-color: white;
`;

const MyProfileView = styled.div`
  width: 15vw;
  border-right: 1px solid var(--grayContentsBorder);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0;
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
  border: 4px double gray;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0rem 0 1rem;
`;

const PictureProfile = styled.div`
  height: 14rem;
  width: 70%;
  border-radius: 50%;
  /* background-color: pink; */
  border: 1px solid black;
  margin: 0 5% 5% 15%;
`;

const FormInputProFile = styled.form`
  width: 100%;
  background-color: var(--greenSub);
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputProfileForm = styled.input`
  width: 80%;
  border: none;
  height: 1.5rem;
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
      .catch(() => console.log('a'));
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
              <StyledBackgroundButton color="red">
                <input type="submit" />
              </StyledBackgroundButton>
            </FormInputProFile>
          </UserProfileUpdateBody>
        ) : (
          <UserProfileUpdateBody>
            <div className="user-info">
              nickname
              <div className="user-nickname">aa</div>
              <div className="user-nickname">email</div>
            </div>
          </UserProfileUpdateBody>
        )}
      </GrayProfileView>
    </MyProfileView>
  );
};

export default UserProfile;
