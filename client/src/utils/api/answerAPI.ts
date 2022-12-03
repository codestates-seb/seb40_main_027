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
    .then(() => {
      Swal.fire({
        text: '삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonColor: 'var(--greenMain)',
        cancelButtonColor: 'var(--grayContentsBorder)',
      });
    })
    .catch((err) => console.log(err));
};
