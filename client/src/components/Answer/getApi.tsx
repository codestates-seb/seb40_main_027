import axios from 'axios';

export const getComment = (id: string) => {
  return axios({
    method: 'get',
    url: `/postscript/${id}`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImVtYWlsIjoicGp3QGdtYWlsLmNvbSIsInN1YiI6InBqd0BnbWFpbC5jb20iLCJpYXQiOjE2Njk2MDk1NDMsImV4cCI6MTY2OTY5NTk0M30.XcAWYYmpkTNFhq-VaW8zKthvWNlBYWjsTAUf2eXoL_Zz0WGL0DO5YD6vKC8B6ofsbYhRz4KgTZcoLlAVvikxMQ',
    },
  });
};
