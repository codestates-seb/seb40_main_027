import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  height: 100%;
  & > * {
    margin-top: 2rem;
  }

  justify-content: center;
  @media screen and (max-width: 414px) {
    margin: 0;
    width: 80vw;

    & > * {
      margin-top: 0;
    }
  }
`;

export const QuestionContentForm = styled.div`
  width: 100%;
  font-size: 1.2rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  font-weight: bold;
  margin: 0px;

  @media screen and (max-width: 414px) {
    margin: 0px;
    .img-review {
      display: flex;

      width: 80vw;
      margin-top: 1rem;
    }
  }
`;

export const ButtonBoxForm = styled.div`
  margin-top: 2%;
  width: 100%;
`;

export const SelectQuestionButton = styled.button`
  background-color: var(--greenMain);
  width: 100%;

  padding: 0% 10% 0% 10%;
  display: flex;
  font-size: 1.2rem;
  justify-content: flex-start;
  margin: 1% 0 1rem 0;
  border: 3px double white;

  @media (hover: hover) {
    &:hover {
      background-color: var(--whiteBackground);
    }
  }

  @media screen and (max-width: 414px) {
    &:hover {
      background-color: none;
    }
  }
`;

export const NumberBorder = styled.span`
  border: 3px double white;
  display: flex;
  width: 7%;
  color: white;
`;

export const FormCaseView = styled.div`
  //전체적인 크기
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    height: 50vh;
    margin: 0;
  }
`;

export const SContentForm = styled.div`
  //글씨 위치
  margin: 0.5rem 0 2rem 0;
  font-size: 1.3rem;
  height: 50px;

  @media screen and (max-width: 414px) {
    font-size: 1rem;
    margin: 0px;
  }
`;
