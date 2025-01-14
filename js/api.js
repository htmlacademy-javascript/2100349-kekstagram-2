import { KEKS_DATA } from './constants';
import { KEKS_NO_DATA } from './constants';


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
