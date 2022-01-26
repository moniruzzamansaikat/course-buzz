import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const token = localStorage.getItem(key);

    // ! warning: its' for string only - [token in this case]
    return token ? token.replace(/^"(.*)"$/, '$1') : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
