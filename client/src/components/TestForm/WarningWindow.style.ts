import styled from 'styled-components';

export const WarningLargeContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const WaringButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const WarningButton = styled.button`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: aquamarine;
  width: 40%;
  height: 3rem;
  border-radius: 10px;
  margin-top: 5rem;
`;

export const WarnTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 2rem;
  color: red;
`;

export const WarnContent = styled.div`
  display: flex;
  font-weight: bold;
  color: var(--whiteBackground);
  width: 100%;
  animation: Typing 2s steps(32), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;

  font-size: 1.5em;

  @keyframes Typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
