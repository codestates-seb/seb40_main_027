import * as S from './DetailTable.style';

// 데이터 확정이 아직 나지 않아서 어떤 데이터 렌더링 될지 한번더 체크 필요

// 통신으로 받아온 데이터의 key값에 해당하는 한글 호출하여 렌더링

export interface DataType {
  [index: string]: string | number;
  beginRegisterDate: string;
  bootcampId: number;
  title: string;
  finalRegisterDate: string;
  duration: string;
  onOff: string;
  totalCost: string;
  superviser: string;
  satisfaction: string;
  trTime: string;
  site: string;
  weekendStatus: string;
  startDate: string;
  endDate: string;
}

const keyDict: DataType = {
  bootcampId: 1,
  title: '훈련기관명',
  beginRegisterDate: '접수일',
  finalRegisterDate: '접수마감일',
  duration: '기간',
  onOff: '온/오프라인',
  totalCost: '총 비용',
  superviser: '주관부처',
  satisfaction: '만족도',
  trTime: '훈련시간',
  site: '홈패이지 주소',
  weekendStatus: '주야구분/주말여부',
  startDate: '개강일',
  endDate: '종강일',
};
// const data: DataType = {
//   bootcampId: 1,
//   title: '코드스테이츠',
//   beginRegisterDate: '2022-11-29',
//   finalRegisterDate: '2022-11-30',
//   duration: '6개월',
//   onOff: '온라인',
//   totalCost: '무료(국비지원)',
//   superviser: '코드스테이츠',
//   satisfaction: '2',
//   trTime: '9:00 ~ 18 : 00',
//   site: 'https://www.choongang.co.kr/',
//   weekendStatus: '주간/주중',
//   startDate: '2022-12-1',
//   endDate: '2022-5-29',
// };

/** 일단 전부 나열하여 작성, 추후 data확정되면 mapping형태로 한번 refactoring 필요 **/

interface PropsType {
  data: DataType;
  halfIdx: number;
  dataKeys: Array<string>;
}

function decider(data: DataType, el: string | number) {
  if (el === 'duration' && data[el] === '') {
    const start = data.startDate.substring(2);
    const end = data.endDate.substring(2);
    return `${start} ~ ${end}`;
  } else if (el === 'site') {
    return <a href={data[el]}>{data[el]}</a>;
  } else if (el === 'satisfaction') {
    return `${data[el]}/5`;
  } else return data[el];
}

export const DetailTable = ({ data, halfIdx, dataKeys }: PropsType) => {
  return (
    <S.Detail>
      <div>
        {dataKeys.map((el: string, idx: number) =>
          idx <= halfIdx && idx >= 1 ? (
            <div key={idx}>
              <div>
                <S.RowHeader>{keyDict[el]}</S.RowHeader>
              </div>
              <div>{decider(data, el)}</div>
            </div>
          ) : null
        )}
      </div>
      <div>
        {dataKeys.map((el: string, idx: number) =>
          idx > halfIdx ? (
            <div key={idx}>
              <div>
                <S.RowHeader>{keyDict[el]}</S.RowHeader>
              </div>
              <div>{decider(data, el)}</div>
            </div>
          ) : null
        )}
      </div>
    </S.Detail>
  );
};
