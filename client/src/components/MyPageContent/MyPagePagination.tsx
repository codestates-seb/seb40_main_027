import Pagination from 'react-js-pagination';

interface PageProps {
  totalCount: number;
  page: number;
  postPerPage: number;
  pageRangeDisplayed: number;
  handlePageChange: (page: number) => void;
  plusClick: (e: string) => void;
  MinusClick: (e: string) => void;
}

const MyPagePagination = ({
  totalCount,
  page,
  postPerPage,
  pageRangeDisplayed,
  handlePageChange,
  MinusClick,
  plusClick,
}: PageProps) => {
  console.log(page);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={postPerPage}
      totalItemsCount={totalCount ? totalCount : 0}
      pageRangeDisplayed={pageRangeDisplayed}
      prevPageText={'<'}
      nextPageText={'>'}
      onChange={handlePageChange}
    />
  );
};
export default MyPagePagination;
