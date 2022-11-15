import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SearchWrapper = styled.form`
  width: 200px; // 임시 조정(추후 페이지에 따라 조정 또는 리펙토링 필요)
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
    /* height: 100%;  */
    border: none;
    outline: none;
    font-size: 80%;
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
