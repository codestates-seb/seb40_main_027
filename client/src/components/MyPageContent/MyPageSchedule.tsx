import * as S from './MyPageSchedule.style';
import MyPageTable from './MyPageTable';

const MyPageSchedule = () => {
  return (
    <S.ScheduleContent>
      <div className="schedule-line">
        <S.ScheduleName>찜한 일정</S.ScheduleName>
      </div>
      <MyPageTable />
    </S.ScheduleContent>
  );
};
export default MyPageSchedule;
