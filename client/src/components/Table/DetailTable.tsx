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
  process: string;
  vote: string | number;
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
  process: '훈련명',
  vote: '찜여부',
};

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
    return (
      <a href={`https://${data[el]}`} target="_blank" rel="noopener noreferrer">
        {data[el]}
      </a>
    );
  } else if (el === 'satisfaction') {
    return `${data[el]}/5`;
  } else return data[el];
}

export const DetailTable = ({ data, halfIdx, dataKeys }: PropsType) => {
  return (
    <S.Detail>
      <div>
        {dataKeys.map((el: string, idx: number) =>
          idx <= halfIdx && idx >= 1 && keyDict[el] !== '훈련명' ? (
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
          idx > halfIdx && keyDict[el] !== '찜여부' ? (
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
