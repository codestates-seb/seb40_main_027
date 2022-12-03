import * as S from './BootCamp.style';
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Banner from '../components/Banner';
import Loading from '../components/Loading/Loading';
import SearchBar from '../components/SearchBar/SearchBar';
import { FilterButton } from '../components/Button';
import { BootData, MobileTable, Table } from '../components/Table/Table';

const BootCamp = () => {
  const [items, setItems] = useState<BootData[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  const getItems = useCallback(async (page: number) => {
    await setLoading(true);
    await axios.get(`/bootcamp?page=${page}&size=10&sort=finalRegisterDate`).then((res) => {
      console.log('i am', page);
      setItems((items) => items.concat(res.data.data));
      setTotalPages(res.data.pageInfo.totalPages);
    });
    await setLoading(false);
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
    <S.PageWrap>
      <section>
        <Banner text="부트캠프 / 학원일정" pageType="other" />
      </section>
      <S.MiddleDiv>
        <div>
          <SearchBar />
          <FilterButton
            pageType="bootcamp"
            url={`/bootcamp?page=${page}&size=10&sort=finalRegisterDate`}
            setPosts={setPosts}
          />
        </div>
      </S.MiddleDiv>
      <div>
        <Table data={items} />
        <MobileTable data={items} />
      </div>
      <S.RefDiv ref={ref}>{inView && loading ? <Loading /> : null}</S.RefDiv>
    </S.PageWrap>
  );
};

export default BootCamp;
