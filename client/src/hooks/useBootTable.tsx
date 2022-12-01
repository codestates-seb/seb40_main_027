import axios from 'axios';
import { useEffect, useState } from 'react';
import { DataType } from '../components/Table/DetailTable';

export const useGetBootTable = () => {
  const [data, setData] = useState('');

  axios({
    method: 'get',
    url: '/bootcamp/page=1&size=10&sort=beginRegisterDate',
  })
    .then((resopnse) => {
      setData(resopnse.data);
    })
    .catch((err) => alert(err));

  return data;
};

/** 뒤에 숫자를 나중에 받아오는 코드가 필요 **/
export const useGetBootSpecificTable = () => {
  const [data, setData] = useState({
    bootcampId: 1,
    title: '',
    beginRegisterDate: '',
    finalRegisterDate: '',
    duration: '',
    onOff: '',
    totalCost: '',
    superviser: '',
    satisfaction: '',
    trTime: '',
    site: '',
    weekendStatus: '',
    startDate: '',
    endDate: '',
    process: '',
    vote: 0,
  });
  useEffect(() => {
    axios({
      method: 'get',
      url: '/bootcamp/2',
      headers: {
        Authorization: localStorage.getItem('access'),
      },
    })
      .then((resopnse) => {
        console.log(resopnse.data);
        setData(resopnse.data.data);
      })
      .catch((err) => alert(err));
  }, []);

  return data;
};
