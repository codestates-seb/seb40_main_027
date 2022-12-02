import * as S from './Table.style';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import dummydata from './dummydata';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// 여기서 api 호출(customHook으로 호출)

// const data = dummydata;

interface BootData {
  bootcampId: number;
  title: string;
  beginRegisterDate: string;
  finalRegisterDate: string;
  process: string;
  totalCost: string;
  onOff: string;
}

export const TestTable = ({ data }: any) => {
  return (
    <div>
      {data.map((el: any, idx: any) => (
        <Link to={`/bootcamp/${el.bootcampId}`} key={idx}>
          <div>{el.bootcampId}</div>
        </Link>
      ))}
    </div>
  );
};

export const Table = ({ data }: any) => {
  // const [data, setData] = useState<BootData>();
  // useEffect(() => {
  //   axios.get(`/bootcamp?page=1&size=10&sort=finalRegisterDate`)
  //     then(() => );
  // }, [])

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
  // e: React.MouseEvent<HTMLButtonElement>,
  const onClick = (key: any) => {
    console.log('key index: ', key);
  };
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
              <td key={cell.id}>
                <Link to={`bootcamp/${cell.id}`}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Link>
              </td>
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
//               <div>{`${el.beginRegisterDate}`}</div>
//             </S.MobileLeft>
//             <S.MobileMiddle>
//               <div>{el.title}</div>
//               <div>
//                 <span>{el.totalCost}</span> <span>{el.onOff}</span>
//               </div>
//             </S.MobileMiddle>
//             <S.MobileRight>
//               <div>{el.process}</div>
//             </S.MobileRight>
//           </div>
//         </S.MobileComp>
//       ))}
//       {/* 절반 rendering */}
//       {}
//     </>
//   );
// };
