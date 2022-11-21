import Banner from '../components/Banner';
import { FilterButton } from '../components/Button';
import SearchBar from '../components/SearchBar';
import * as S from './BootCamp.style';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import PageHeader from '../components/Header/PageHeader';

const data = [
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    dueDate: '10/14',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    dueDate: '10/14',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    dueDate: '10/14',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    dueDate: '10/14',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
];

interface BootData {
  name: string;
  date: string;
  dueDate: string;
  filed: string;
  cost: string;
  onOff: string;
}

const BootCamp = () => {
  const columnHelper = createColumnHelper<BootData>();
  const columns = [
    columnHelper.accessor('name', { header: '이름', maxSize: 10 }),
    columnHelper.accessor('date', { header: '등록일', maxSize: 10 }),
    columnHelper.accessor('dueDate', { header: '마감일', maxSize: 50 }),
    columnHelper.accessor('filed', { header: '과정', maxSize: 50 }),
    columnHelper.accessor('cost', { header: '총 비용', maxSize: 50 }),
    columnHelper.accessor('onOff', { header: '온/오프라인', maxSize: 50 }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </S.TableWrap>
        </section>
      </S.PageWrap>
    </>
  );
};

export default BootCamp;
