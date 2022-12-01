import { Icon } from '@iconify/react';
import * as S from './MyPageTable.style';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

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
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  cost: string;
  totalCost: string;
  onOff: boolean;
}

const columns = ['이름', '등록일', '교육기간', '과정', '총 비용', '온/오프라인', '찜'];
const MyPageTable = () => {
  const [bootList, setBootList] = useState<BootData[]>();
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const linkTableHandler = (id: number) => {
    navigate(`/bootcamp/${id}`);
  };

  const getItem = async () => {
    setLoading(true);
    await axios.get('mypage/bootcampLike').then((res) => {
      setBootList(res.data.data);
    });
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios({
      method: 'get',
      url: 'mypage/bootcampLike',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoiYWJjZEBnbWFpbC5jb20iLCJzdWIiOiJhYmNkQGdtYWlsLmNvbSIsImlhdCI6MTY2OTc5Mzk4OSwiZXhwIjoxNjY5ODgwMzg5fQ.jwHPEroDLyZmiL2TRvYuvaED2bCmDwsXUs3QL1nA8QVoU9Kkr2nmJd5vSlHdOr5ak9hKHOf3Vj65Ffe_gIUdnQ',
      },
    }).then((res) => {
      const { data } = res;
      setBootList(data.data);
    });
  }, []);

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
        {data.map((item) => {
          return (
            <tr key={item.id} onClick={() => linkTableHandler(item.id)}>
              <td>{item.name} </td>
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
                  <Icon icon="ic:round-star-border" color="#fbb3b3" width="30" height="30" />
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
