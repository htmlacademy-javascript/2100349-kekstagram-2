import { KEKS_DATA, KEKS_NO_DATA } from './constants.js';


export const getData = () => fetch(KEKS_DATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const sendData = (body) => fetch(KEKS_NO_DATA, {
  method: 'POST',
  body
});
