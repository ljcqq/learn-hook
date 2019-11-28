import React, { createContext } from 'react';
import Example from './Example';

import './App.css';

export const ThemeContext = createContext(null);

export default () => {

  return (
    <ThemeContext.Provider value="light">
      <Example />
    </ThemeContext.Provider>
  )
}
