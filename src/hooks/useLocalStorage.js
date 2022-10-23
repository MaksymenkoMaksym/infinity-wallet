import { useEffect, useState } from 'react';
import fetchCurrency from 'utility/CurrencyApi/fetchCurrency';

export const useLocalStorage = () => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('currency')) ?? [[], 0];
  });
  useEffect(() => {
    const difference = Date.now() - state[1];
    const fetch = async () => {
      try {
        const data = await fetchCurrency();
        const timeStamp = Date.now();
        setState([data, timeStamp]);
      } catch (error) {
        console.log(error);
      }
    };
    difference > 3600000 && fetch();
    localStorage.setItem('currency', JSON.stringify(state));
  }, [state]);

  return [state];
};
