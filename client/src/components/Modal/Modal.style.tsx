import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

export const ModalBtn = styled.div`
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  word-break: keep-all;
  background: var(--bg-element2);
  border: 1px solid var(--bg-element5);
  color: var(--bg-element5);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--bg);
  width: 60%;
  height: 25%;

  > span.close-btn {
    margin-top: -5%;
    margin-bottom: 5%;
    cursor: pointer;
  }

  > div.desc {
    margin-top: 25px;
    color: #4000c7;
  }
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 56%;
    height: 30%;
    border: 2px solid var(--textTitle);
    font-size: 180%;
  }
  svg {
    padding-left: 1rem;
    cursor: text;
  }
  input {
    padding-left: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 80%;
    background-color: var(--bg);
    color: var(--textTitle);
  }
  /* button {
      height: 150%;
    } */
`;
