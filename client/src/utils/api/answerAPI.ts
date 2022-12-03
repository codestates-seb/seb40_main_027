import axios from 'axios';
const access = localStorage.getItem('access');
import Swal from 'sweetalert2';

export const getComment = (url: string, id: string) => {
  return axios({
    method: 'get',
    url: `/${url}/${id}`,
  });
};

export const deleteComment = (id: string, url: string) => {
  return axios({
    method: 'delete',
    url: `/${url}/comment/${id}`,
    headers: {
      Authorization: access,
    },
  })
    .then(() => {})
    .catch((err) => console.log(err));
};
