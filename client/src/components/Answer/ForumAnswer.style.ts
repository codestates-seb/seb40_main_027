import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { StyledBackgroundButton } from '../Button/BackgroundButton';

export const ContainerViewAnswer = styled.div`
  @media screen and (max-width: 414px) {
    overflow-y: scroll;
  }
`;

export const QuillContent = styled.div`
  bottom: 0;

  border: 2px solid var(--greenSub);
  position: relative;
  border-radius: 10px;
  height: 16vh;

  .btn-area {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (max-width: 414px) {
    bottom: 0;
    border: 4px solid var(--greenSub);

    height: 100%;
  }
`;
export const QuillArea = styled(ReactQuill)`
  background-color: var(--whiteBackground);
  margin: 1rem;
  border-radius: 10px;

  @media screen and (max-width: 414px) {
    margin: 0;
  }
`;

export const SubmitButton = styled(StyledBackgroundButton)`
  width: 6rem;
  height: 2rem;
  margin-right: 2rem;
  border-radius: 10px;
  @media screen and (max-width: 414px) {
    margin: 0;
  }
`;

export const ViewAnswer = styled.div`
  @media screen and (max-width: 414px) {
    height: 100%;
  }
`;
