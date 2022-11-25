import { Icon } from '@iconify/react';
import * as S from './MyPageTable.style';

const data = [
  {
    id: 1,
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
    vote: true,
  },
  {
    id: 2,
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
    vote: true,
  },
  {
    id: 3,
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
    vote: true,
  },
  {
    id: 4,
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
    vote: true,
  },
  {
    id: 5,
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
    vote: true,
  },
];

interface BootData {
  id: number;
  name: string;
  date: string;
  duration: string;
  filed: string;
  cost: string;
  onOff: string;
  vote: boolean;
}

const columns = ['이름', '등록일', '교육기간', '과정', '총 비용', '온/오프라인', '찜'];
const MyPageTable = () => {
  return (
    <S.TableSchedule>
      <thead>
        <tr>
          {columns.map((item, idx) => {
            return <th key={idx}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => {
          return (
            <tr key={idx}>
              <S.TableLink to={`/bootcamp/${item.id}`} key={idx}>
                <td>{item.name} </td>
              </S.TableLink>

              <td>{item.date}</td>
              <td>{item.duration}</td>
              <td>{item.filed}</td>
              <td>{item.cost}</td>
              <td>{item.onOff}</td>
              <td>
                {item.vote === true ? (
                  <span>
                    <S.LikeButton>
                      <Icon icon="ic:round-star" color="#fbb3b3" width="30" height="30" />
                    </S.LikeButton>
                  </span>
                ) : (
                  <Icon icon="ic:round-star-border" color="#fbb3b3" width="40" height="40" />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </S.TableSchedule>
  );
};

export default MyPageTable;
