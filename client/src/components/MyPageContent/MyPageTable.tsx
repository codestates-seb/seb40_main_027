import * as S from './MyPageTable.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const navigate = useNavigate();

  const access = localStorage.getItem('access');
  const linkTableHandler = (id: number) => {
    navigate(`/bootcamp/${id}`);
  };

  const getItem = async () => {
    await axios.get('mypage/bootcampLike').then((res) => {
      setBootList(res.data.data);
    });
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: 'mypage/bootcampLike',
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
            <tr key={item.id} onClick={() => linkTableHandler(item.id)}>
              <td>{item.title} </td>
              <td>{item.beginRegisterDate}</td>
              <td>{item.finalRegisterDate}</td>
              <td>{item.process}</td>
              <td>{item.totalCost}</td>
              <td>{item.onOff}</td>
              {/* <td>
                {item.vote === true ? (
                  <span>
                    <S.LikeButton>
                      <Icon icon="ic:round-star" color="#fbb3b3" width="30" height="30" />
                    </S.LikeButton>
                  </span>
                ) : (
                  <Icon icon="ic:round-star-border" color="#fbb3b3" width="30" height="30" />
                )}
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </S.TableSchedule>
  );
};

export default MyPageTable;
