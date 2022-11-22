import * as S from './MyPageSchedule.style';
import axios from 'axios';

const MyPageSchedule = () => {
  return (
    <S.ScheduleContent>
      <div className="schedule-line">
        <S.ScheduleName>찜한 일정</S.ScheduleName>
      </div>
    </S.ScheduleContent>
  );
};
export default MyPageSchedule;
