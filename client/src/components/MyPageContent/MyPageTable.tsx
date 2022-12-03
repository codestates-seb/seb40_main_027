import * as S from './MyPageTable.style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { BootLikeButton } from './BootLikeButton';
import { useRecoilState } from 'recoil';
import { bootListMyPage } from '../../atoms/index';

interface BootDataProps {
  bootcampId: number;
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  cost: string;
  totalCost: string;
  onOff: boolean;
}

export interface BootDataList extends Array<BootDataProps> {}

const columns = ['이름', '등록일', '수료일', '과정', '총비용', '온/오프라인', '찜'];
const MyPageTable = () => {
  const [bootList, setBootList] = useRecoilState(bootListMyPage);
  const navigate = useNavigate();
  const access = localStorage.getItem('access');

  const linkTableHandler = (id: number) => {
    navigate(`/bootcamp/${id}`);
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: `/users/mypage/bootcampLike?page=1&size=10`, //무한스크롤 구현을 안해서 1페이지만 불러옴
      headers: {
        Authorization: access,
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
        {bootList?.map((item) => {
          return (
            <tr key={item.bootcampId} onClick={() => linkTableHandler(item.bootcampId)}>
              <td>{item.title} </td>
              <td>{item.beginRegisterDate}</td>
              <td>{item.finalRegisterDate}</td>
              <td>{item.process}</td>
              <td>{item.totalCost}</td>
              <td>{item.onOff}</td>
              <td>
                <BootLikeButton bootcampId={item.bootcampId} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </S.TableSchedule>
  );
};

export default MyPageTable;
