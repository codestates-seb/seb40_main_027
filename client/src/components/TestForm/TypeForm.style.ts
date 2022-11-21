import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10%;
  @media screen and (max-width: 414px) {
    margin: 0;
    width: 80vw;
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
  &:hover {
    background-color: var(--whiteBackground);
    transition: all 1s;
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
  height: 60vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px;

  @media screen and (max-width: 414px) {
    height: 50vh;
  }
`;

export const SContentForm = styled.div`
  //글씨 위치
  margin: 0.5rem 0 1.5rem 0;
  font-size: 1.3rem;

  @media screen and (max-width: 414px) {
    font-size: 1rem;
    margin: 0px;
  }
`;
