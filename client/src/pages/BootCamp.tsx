import Banner from '../components/Banner';
import { FilterButton } from '../components/Button';
import SearchBar from '../components/SearchBar/SearchBar';
import * as S from './BootCamp.style';
import PageHeader from '../components/Header/PageHeader';
import { MobileTable, Table } from '../components/Table/Table';

const BootCamp = () => {
  return (
    <>
      <PageHeader />
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
        <section>
          <Table />
          <MobileTable />
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCamp;
