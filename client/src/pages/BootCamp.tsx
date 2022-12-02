import Banner from '../components/Banner';
import { FilterButton } from '../components/Button';
import SearchBar from '../components/SearchBar/SearchBar';
import * as S from './BootCamp.style';
import { Table, TestTable } from '../components/Table/Table';
import Loading from '../components/Loading/Loading';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const BootCamp = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  // useEffect(() => {
  //   axios.get(`/bootcamp?page=${page}&size=10&sort=finalRegisterDate`).then((res) => {
  //     console.log('then render');
  //     setItems(items.concat(res.data.data));
  //   });
  // }, []);

  const getItems = useCallback(async (page: any) => {
    setLoading(true);
    await axios.get(`/bootcamp?page=${page}&size=10&sort=finalRegisterDate`).then((res) => {
      console.log('then render');
      setItems(items.concat(res.data.data));
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    getItems(page);
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      if (page < 19) {
        setPage(page + 1);
      }
    }
  }, [inView, loading]);

  return (
    <S.PageWrap>
      <section>
        <Banner text="부트캠프 / 학원일정" pageType="other" />
      </section>
      <S.MiddleSection>
        <div>
          <SearchBar />
          <FilterButton />
        </div>
      </S.MiddleSection>
      <div>
        {/* <TestTable data={items} /> */}
        <Table data={items} />
      </div>
      <div ref={ref}>{inView ? <Loading /> : null}</div>
    </S.PageWrap>
  );
};

export default BootCamp;
