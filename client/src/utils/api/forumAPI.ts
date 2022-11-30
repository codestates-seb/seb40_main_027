import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

export const readAllPosts = async (url: string, setPosts: React.Dispatch<any>) => {
  try {
    const res = await axios.get(url);

    if (res.status !== 200) {
      throw new Error(`${res.status}`);
    }

    setPosts(res.data.data);
  } catch (err) {
    console.error(err);
  }
};

export const readPost = async (url: string, setPost: React.Dispatch<any>) => {
  const access = localStorage.getItem('access');

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: access,
      },
    });

    if (res.status !== 200) {
      throw new Error(`${res.status}`);
    }

    setPost(res.data.data);
  } catch (err) {
    console.error(err);
  }
};

interface RequestBody {
  title?: string;
  content?: string;
  tagName: string;
  postscriptTitle?: string;
  postscriptContent?: string;
  studyTitle?: string;
  studyContent?: string;
  mentoringTitle?: string;
  mentoringContent?: string;
}

export const createPost = async (url: string, navigate: NavigateFunction, requestBody: RequestBody) => {
  const access = localStorage.getItem('access');
  const forumType = url.split('/')[1];

  try {
    const res = await axios.post(url, requestBody, {
      headers: {
        Authorization: access,
      },
    });

    if (res.status !== 201) {
      throw new Error(`${res.status}`);
    }

    navigate(`/${forumType}/${res.data.data[`${forumType}Id`]}`);
  } catch (err) {
    console.error(err);
  }
};

export const updatePost = async (url: string, navigate: NavigateFunction, requestBody: RequestBody) => {
  const access = localStorage.getItem('access');
  const forumType = url.split('/')[1];

  try {
    const res = await axios.patch(url, requestBody, {
      headers: {
        Authorization: access,
      },
    });

    if (res.status !== 200) {
      throw new Error(`${res.status}`);
    }

    navigate(`/${forumType}/${res.data.data[`${forumType}Id`]}`);
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async (url: string, navigate: NavigateFunction) => {
  const access = localStorage.getItem('access');
  const forumType = url.split('/')[1];

  try {
    const res = await axios.delete(url, {
      headers: {
        Authorization: access,
      },
    });

    if (res.status !== 204) {
      throw new Error(`${res.status}`);
    }

    navigate(`/${forumType}`);
  } catch (err) {
    console.error(err);
  }
};
