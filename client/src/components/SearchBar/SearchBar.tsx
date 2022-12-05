import { Icon } from '@iconify/react';
import styled from 'styled-components';

const SearchWrapper = styled.form`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grayContentsBorder);
  border-radius: 3px;
  input {
    padding-left: 1rem;
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    border: none;
    outline: none;
    font-size: 80%;
  }
`;

const SearchBar = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert('검색 기능은 아직 구현되지 않았습니다.');
  };

  return (
    <SearchWrapper onSubmit={handleSubmit}>
      <Icon icon="ant-design:search-outlined" />
      <input type="text" placeholder="검색" />
    </SearchWrapper>
  );
};

export default SearchBar;
