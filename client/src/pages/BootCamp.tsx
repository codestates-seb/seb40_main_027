import Banner from '../components/Banner';
import { FilterButton } from '../components/Button';
import SearchBar from '../components/SearchBar/SearchBar';
import * as S from './BootCamp.style';
import { MobileTable, Table } from '../components/Table/Table';
import { useState } from 'react';

const BootCamp = () => {
  const [posts, setPosts] = useState<any>([]);
  return (
    <S.PageWrap>
      <section>
        <Banner text="부트캠프 / 학원일정" pageType="other" />
      </section>
      <S.MiddleSection>
        <div>
          <SearchBar />
          <FilterButton pageType="bootcamp" url={`/bootcamp?page=1&size=10`} setPosts={setPosts} />
        </div>
      </S.MiddleSection>
      <section>
        <Table />
        <MobileTable />
      </section>
    </S.PageWrap>
  );
};

export default BootCamp;
