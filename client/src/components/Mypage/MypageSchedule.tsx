import styled from 'styled-components';

const ScheduleContent = styled.div`
  height: 90vh;
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

const MypageSchedule = () => {
  return (
    <ScheduleContent>
      <div className="schedule-line">
        <span className="schedule-name">찜한 일정</span>
      </div>
    </ScheduleContent>
  );
};
export default MypageSchedule;
