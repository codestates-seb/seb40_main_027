import * as S from './MyPageSchedule.style';
import axios from 'axios';
import MyPageTable from './MyPageTable';

const DummySchedule = [{}];

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
