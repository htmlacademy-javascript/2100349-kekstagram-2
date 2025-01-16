import { GET_URL, POST_URL } from './constants.js';


export const getData = () => fetch(GET_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const sendData = (body) => fetch(POST_URL, {
  method: 'POST',
  body
});
