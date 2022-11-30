import * as S from './Table.style';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import dummydata from './dummydata';
import { Link } from 'react-router-dom';

// 여기서 api 호출(customHook으로 호출)

const data = dummydata;

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
  // row클릭 시 해당 페이지로 이동하는 로직
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {};
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
