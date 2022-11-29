import * as S from './Table.style';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

// 여기서 api 호출(customHook으로 호출)

const data = [
  {
    bootcampId: 2,
    title: '코드스테이츠',
    beginRegisterDate: '2022 - 11 - 25',
    finalRegisterDate: '2022 - 11 - 30',
    process: '백엔드',
    totalCost: '무료(국비지원)',
    onOff: '온라인',
  },
  {
    bootcampId: 1,
    title: '코드스테이츠',
    beginRegisterDate: '2022 - 11 - 25',
    finalRegisterDate: '2022 - 11 - 30',
    process: '프론트엔드',
    totalCost: '무료(국비지원)',
    onOff: '온라인',
  },
];

interface BootData {
  bootcampId: number;
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  totalCost: string;
  onOff: string;
}
export const Table = () => {
  const columnHelper = createColumnHelper<BootData>();
  const columns = [
    columnHelper.accessor('title', { header: '이름', maxSize: 10 }),
    columnHelper.accessor('beginRegisterDate', { header: '접수일', maxSize: 10 }),
    columnHelper.accessor('finalRegisterDate', { header: '접수마갑일', maxSize: 50 }),
    columnHelper.accessor('process', { header: '과정', maxSize: 50 }),
    columnHelper.accessor('totalCost', { header: '총 비용', maxSize: 50 }),
    columnHelper.accessor('onOff', { header: '온/오프라인', maxSize: 50 }),
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
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.TableWrap>
  );
};

// export const MobileTable = () => {
//   return (
//     <>
//       {data.map((el, idx) => (
//         <S.MobileComp key={idx}>
//           <div>
//             <S.MobileLeft>
//               <div>{el.date}</div>
//               <div>{el.duration}</div>
//             </S.MobileLeft>
//             <S.MobileMiddle>
//               <div>{el.name}</div>
//               <div>
//                 <span>{el.cost}</span> <span>{el.onOff}</span>
//               </div>
//             </S.MobileMiddle>
//             <S.MobileRight>
//               <div>{el.filed}</div>
//             </S.MobileRight>
//           </div>
//         </S.MobileComp>
//       ))}
//       {/* 절반 rendering */}
//       {}
//     </>
//   );
// };
