import PageHeader from '../components/Header/PageHeader';
import styled from 'styled-components';

import StartForm from '../components/StartForm';
const TestContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContent = styled.div`
  display: flexzz;
  justify-content: center;
  align-items: center;
  background-color: var(--greenMain);
  height: 80%;
  width: 70%;
  @media screen and (max-width: 414px) {
    height: 60vh;
    width: 100vw;
  }
`;

const StyleFormCode = styled.div`
  border: 6px double white;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
`;

const Test = () => {
  return (
    <div>
      <PageHeader />
      <TestContent>
        <FormContent>
          <StyleFormCode>
            <StartForm />
          </StyleFormCode>
        </FormContent>
      </TestContent>
    </div>
  );
};
export default Test;
