import styled from 'styled-components';

export const ScheduleContent = styled.div`
  height: 80vh;
  width: 100%;

  .schedule-line {
    display: flex;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid var(--grayContentsBorder);
    align-items: center;
  }
  .schedule-name {
    font-size: 1rem;
    margin-left: 2rem;
  }
  @media screen and (max-width: 414px) {
    .schedule-line {
      display: none;
    }
    .schedule-name {
      display: none;
    }
  }
`;

export const ScheduleName = styled.span`
  font-size: 1rem;
  margin-left: 2rem;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
