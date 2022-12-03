import Pagination from 'react-js-pagination';
import styled from 'styled-components';

interface PageProps {
  totalCount: number;
  page: number;
  postPerPage: number;
  pageRangeDisplayed: number;
  handlePageChange: (page: number) => void;
}

const PageContent = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    text-decoration: none;
    display: inline-block;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
  }
`;

const MyPagePagination = ({ totalCount, page, postPerPage, pageRangeDisplayed, handlePageChange }: PageProps) => {
  return (
    <PageContent>
      <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={totalCount ? totalCount : 0}
        pageRangeDisplayed={pageRangeDisplayed}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </PageContent>
  );
};
export default MyPagePagination;
