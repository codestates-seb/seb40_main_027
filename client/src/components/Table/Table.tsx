import * as S from './Table.style';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Link } from 'react-router-dom';

export interface BootData {
  bootcampId: number;
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  totalCost: string;
  onOff: string;
}
const onClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function dDayCounter(income: any, data: any, index: number) {
  const value = income;
  if (value === '모집중') {
    return '발견';
    // const today = new Date();
    // const dDay = new Date(data[index].finalRegisterDate);
    // const gap = dDay.getTime() - today.getTime();
    // const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    // if (result <= 7 && result >= 0) {
    //   if (result === 0) return 'D-Day';
    //   return `D-${result}`;
    // }
  } else {
    return income;
  }
}

export const Table = ({ data }: any) => {
  const columnHelper = createColumnHelper<BootData>();
  const columns = [
    columnHelper.accessor('title', { header: '이름' }),
    columnHelper.accessor('beginRegisterDate', { header: '접수일' }),
    columnHelper.accessor('finalRegisterDate', { header: '접수마감일' }),
    columnHelper.accessor('process', { header: '과정' }),
    columnHelper.accessor('totalCost', { header: '총 비용' }),
    columnHelper.accessor('onOff', { header: '온/오프라인' }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <S.TableWrap>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, idx) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                <Link to={`/bootcamp/${data[idx].bootcampId}`} onClick={onClick}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext()) === '모집중'
                    ? '발견'
                    : flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.TableWrap>
  );
};

export const MobileTable = ({ data }: any) => {
  return (
    <>
      {data.map((el: any, idx: number) => (
        <S.MobileComp key={idx}>
          <div>
            <S.MobileLeft>
              <div>{`${el.beginRegisterDate}`}</div>
            </S.MobileLeft>
            <S.MobileMiddle to={`/bootcamp/${data[idx].bootcampId}`} onClick={onClick}>
              <div>{el.process}</div>
              <div>
                <div>{el.title}</div>
              </div>
            </S.MobileMiddle>
            <S.MobileRight>
              <div>
                <div>{el.totalCost}</div> <div>{el.onOff}</div>
              </div>
            </S.MobileRight>
          </div>
        </S.MobileComp>
      ))}
    </>
  );
};
