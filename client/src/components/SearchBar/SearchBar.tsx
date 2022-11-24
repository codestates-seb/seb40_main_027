import { Icon } from '@iconify/react';
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
    border: none;
    outline: none;
    font-size: 80%;
  }
`;

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  // 하위 onSubmit함수에서 추후 작성 필요
  const onSubmit = (data: any) => console.log(data);
  return (
    <SearchWrapper onSubmit={handleSubmit(onSubmit)}>
      <Icon icon="ant-design:search-outlined" />
      <input type="text" placeholder="검색" {...register('keyword')} />
    </SearchWrapper>
  );
};

export default SearchBar;
