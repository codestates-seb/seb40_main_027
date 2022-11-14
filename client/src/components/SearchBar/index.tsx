import { Icon } from '@iconify/react';
import { useState } from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 3px;
  input {
    padding-left: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 80%;
    :focus {
      outline: #00ff00 dotted thick;
    }
  }
`;

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const handleChange = (e: any) => setSearchText(e.target.value);
  // api 연동 시 검색이 가능한 onSubmit 필요

  return (
    <SearchWrapper>
      <Icon icon="ant-design:search-outlined" />
      <input type="text" className="search-bar" placeholder="검색" value={searchText} onChange={handleChange}></input>
    </SearchWrapper>
  );
};
export default SearchBar;
