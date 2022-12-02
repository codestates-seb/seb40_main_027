import { Icon } from '@iconify/react';
import * as S from './MyPageTable.style';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BootLikeButton } from './BootLikeButton';

interface BootData {
  bootcampId: number;
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  cost: string;
  totalCost: string;
  onOff: boolean;
}

const columns = ['이름', '등록일', '수료일', '과정', '총비용', '온/오프라인', '찜'];
const MyPageTable = () => {
  const [bootList, setBootList] = useState<BootData[]>();
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [likeBtn, setLikeBtn] = useState(1);
  const navigate = useNavigate();
  const access = localStorage.getItem('access');

  const linkTableHandler = (id: number) => {
    navigate(`/bootcamp/${id}`);
  };

  const handleCancel = (event: any) => {
    event.stopPropagation();
  };
  const getItem = () => {
    setLoading(true);
    return axios.get('mypage/bootcampLike').then((res) => {
      setBootList(res.data.data);
    });
  };

  const postLikeBtn = () => {
    return axios({
      method: 'post',
      url: '/bootcamp/votes/{bootcampId}',
      headers: {
        Authorization: access,
      },
    });
  };

  // const handlerLikeBtn = async () => {
  //   try {
  //     await postLikeBtn();
  //     const getItemList = await getItem();
  //     setBootList(getItemList.data.data);
  //   } catch {
  //     console.log('err');
  //   }
  // };

  useEffect(() => {
    axios({
      method: 'get',
      url: `/users/mypage/bootcampLike?page=1&size=10`,
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
                {/* <button type="button" onClick={(event) => handleCancel(event)}> */}
                <BootLikeButton />
                {/* </button> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </S.TableSchedule>
  );
};

export default MyPageTable;
