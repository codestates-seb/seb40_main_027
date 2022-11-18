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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--greenMain);
  height: 70%;
  width: 70%;
`;

const Test = () => {
  return (
    <div>
      <PageHeader />
      <TestContent>
        <FormContent>
          <StartForm />
        </FormContent>
      </TestContent>
    </div>
  );
};
export default Test;
