import styled from 'styled-components';

export const StartFormView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 414px) {
    margin: 0 20% 0 0;
  }
`;

export const StartView = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: var(--whiteBackground);
  font-size: 1.5rem;
  animation: shake 0.5s infinite;

  @media screen and (max-width: 414px) {
    font-size: 1rem;
    justify-content: center;
    margin: 0px 10% 0 10%;
  }
`;

export const StartFormButton = styled.button`
  border: none;
  margin-top: 2rem;
  width: 7rem;
  height: 3rem;
  border-radius: 10px;
  font-weight: bold;

  background-color: aquamarine; //확정적인 색이 아니라 우선 임의로 사용
  &:hover {
    background-color: var(--greenSub);
    color: var(--whiteBackground);
    transition: all 1s;
  }
`;
