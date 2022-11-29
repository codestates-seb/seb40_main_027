import axios from 'axios';
import { useState } from 'react';

const useBootTable = (params: string) => {
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
export default useBootTable;
