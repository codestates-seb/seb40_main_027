import styled from 'styled-components';

export const MyProfileView = styled.div`
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

export const ProfileUpdateButton = styled.button`
  border: none;
  background-color: var(--whiteBackground);
  display: flex;
  justify-content: flex-start;
`;

export const UserProfileUpdateBody = styled.div`
  //프로필 전체크기
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid var(--grayHeaderBorder);

  @media screen and (max-width: 414px) {
    justify-content: center;
    height: 30vh;
    flex-direction: row;
  }
`;

export const PictureProfile = styled.span`
  display: flex;
  margin: 0% 8% 1% 15%;
  @media screen and (max-width: 414px) {
    margin: 0 1rem 0 0;
  }
`;

export const FromInputProFile = styled.form`
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
export const InputProfileForm = styled.input`
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

export const UserInfoFormEmail = styled.span`
  background-color: var(--grayHeaderBorder);
  display: flex;
  align-items: center;
  height: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

export const WithdrawArea = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
