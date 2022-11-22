import Banner from '../components/Banner';
import { Icon } from '@iconify/react';
import * as S from './BootCampSepcific.style';

// 데이터 확정이 아직 나지 않아서 어떤 데이터 렌더링 될지 한번더 체크 필요

// 통신으로 받아온 데이터의 key값에 해당하는 한글 호출하여 렌더링
const dict = {
  title: '기관정보',
  process: '과정',
  On_Off: '온/오프라인',
  total_cost: '총 비용',
  begin_register_date: '접수일',
  place: null,
  final_register_date: '접수마갑일',
  start_date: '훈련기간',
  end_date: '훈련기간',
  duration: '공부기간',
};

const data = {
  name: '코드 스테이츠',
  date: '10/11-14',
  On_Off: '온라인',
  duration: '6개월',
  total_cost: '무료(국비)',
  timeTable: '시간표보기',
  satisfaction: '3',
  time: '09:00 ~ 18:00',
  incentives: '월 최대 316,0000d원',
};

const keysObj: Array<string> = Object.keys(data);

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
            {/* <div>
              {keysObj.map((el, idx) =>
                idx <= Math.ceil(keysObj.length / 2) ? (
                  <div key={idx}>
                    <div>
                      <S.RowHeader>{data[el]}</S.RowHeader>
                    </div>
                  </div>
                ) : null
              )}
            </div> */}
            <div>
              <div>
                <div>
                  <S.RowHeader>모집기간</S.RowHeader>
                </div>
                <div>{data.date}</div>
              </div>
              <div>
                <div>
                  <S.RowHeader>공부기간</S.RowHeader>
                </div>
                <div>{data.duration}</div>
              </div>
              <div>
                <div>
                  <S.RowHeader>온/오프라인</S.RowHeader>
                </div>
                <div>{data.On_Off}</div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <S.RowHeader>시간표</S.RowHeader>
                </div>
                <div>{data.time}</div>
              </div>
              <div>
                <div>
                  <S.RowHeader>수강색 평균 만족도</S.RowHeader>
                </div>
                <div>{data.satisfaction}</div>
              </div>
              <div>
                <div>
                  <S.RowHeader>시간</S.RowHeader>
                </div>
                <div>{data.time}</div>
              </div>
            </div>
          </S.Detail>
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCampSpecific;
