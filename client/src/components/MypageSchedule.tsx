import styled from 'styled-components';

const ScheduleContent = styled.div`
  border-right: 1px solid var(--grayContentsBorder);
  overflow-y: auto;
  height: 100%;
  width: 100%;
  .schedule-name {
    display: flex;
    width: 49rem;
    height: 10%;
    border-bottom: 1px solid var(--grayContentsBorder);
    align-items: center;

    font-size: 2rem;
  }
`;

const MypageSchedule = () => {
  return (
    <ScheduleContent>
      <div className="schedule-name">찜한 일정</div>
    </ScheduleContent>
  );
};
export default MypageSchedule;
