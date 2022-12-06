import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import * as S from './MyPageTable.style';
import Loading from '../Loading/Loading';
import { BootLikeButton } from './BootLikeButton';

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

const columns = ['이름', '접수일', '접수마감일', '과정', '총비용', '온/오프라인', '찜'];
const MyPageTable = () => {
  const [bootList, setBootList] = useState<BootDataList>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const navigate = useNavigate();
  const access = localStorage.getItem('access');

  const linkTableHandler = (id: number) => {
    navigate(`/bootcamp/${id}`);
  };

  const getItems = useCallback(async (page: number) => {
    setLoading(true);

    await axios({
      method: 'get',
      url: `/users/mypage/bootcampLike?page=${page}&size=10`,
      headers: {
        Authorization: access,
      },
    }).then((res) => {
      setBootList((bootList) => bootList.concat(res.data.data));
      setTotalPages(res.data.pageInfo.totalPages);
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    getItems(page);
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      if (page < totalPages!) {
        setPage(page + 1);
      } else if (page === totalPages) {
        setLoading(false);
      }
    }
  }, [inView, loading]);

  return (
    <>
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
      <S.RefDiv ref={ref}>{inView && loading ? <Loading /> : null}</S.RefDiv>
    </>
  );
};

export default MyPageTable;
