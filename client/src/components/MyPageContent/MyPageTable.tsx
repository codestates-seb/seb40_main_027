import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';

const TableSchedule = styled.table`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid gray;

  thead {
    height: 10%;
    font-weight: bold;
    background-color: yellow;
    border-bottom: 1px solid gray;
  }
`;

const data = [
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
  {
    name: '코드 스테이츠',
    date: '10/11-14',
    duration: '6개월',
    filed: '프론트엔드',
    cost: '무료(국비)',
    onOff: '온라인',
  },
];

interface BootData {
  name: string;
  date: string;
  duration: string;
  filed: string;
  cost: string;
  onOff: string;
}

const MyPageTable = () => {
  const columnHelper = createColumnHelper<BootData>();
  const columns = [
    columnHelper.accessor('name', { header: '이름', maxSize: 10 }),
    columnHelper.accessor('date', { header: '등록일', maxSize: 10 }),
    columnHelper.accessor('duration', { header: '교육기간', maxSize: 50 }),
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
    <TableSchedule>
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
    </TableSchedule>
  );
};

export default MyPageTable;
