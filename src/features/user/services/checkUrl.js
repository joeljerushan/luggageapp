import axios from 'axios';

export const checkUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
