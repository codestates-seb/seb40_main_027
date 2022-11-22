import Banner from '../components/Banner';
import { Icon } from '@iconify/react';
import * as S from './BootCampSepcific.style';

const data = {
  name: '코드 스테이츠',
  date: '10/11-14',
  onOff: '온라인',
  duration: '6개월',
  cost: '무료(국비)',
  timeTable: '시간표보기',
  satisfaction: '3',
  time: '09:00 ~ 18:00',
  incentives: '월 최대 316,0000d원',
};

const BootCampSpecific = () => {
  return (
    <>
      <Banner text="코드 스테이츠" pageType="other" />
      <S.PageWrap>
        <S.MiddleSection>
          <S.grayBtn>
            홈 페이지
            <Icon icon="ant-design:home-outlined" color="#1dca89" />
          </S.grayBtn>
          <S.grayBtn>
            찜
            <Icon icon="mdi:cards-heart-outline" color="#f24e1e" />
          </S.grayBtn>
        </S.MiddleSection>
        <section>
          <S.Detail>
            <div>
              <div>
                <span>모집기간</span> <span>{data.date}</span>
              </div>
              <div>
                <div>공부기간</div>
              </div>
              <div>
                <div>온/오프라인</div>
              </div>
            </div>
            <div>
              <div>
                <div>시간표</div>
              </div>
              <div>
                <div>수강색 평균 만족도</div>
              </div>
              <div>
                <div>시간</div>
              </div>
            </div>
          </S.Detail>
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampSpecific;
