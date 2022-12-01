import axios from 'axios';
const access = localStorage.getItem('access');

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
      alert('삭제하시겠습니까?');
    })

    .catch(() => console.log('err'));
};
