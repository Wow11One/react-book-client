import React, {
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

import defaultTheme from './themes/default';
import customTheme from './themes/custom';

const themeNames = {
  default: 'default',
  custom: 'custom'
};

const ThemesToThemeNames = {
  [themeNames.default]: defaultTheme,
  [themeNames.custom]: customTheme
};

export const ThemeContext = createContext({
  changeTheme: () => {},
  theme: {},
});

const ThemeProvider = ({
  children,
  themeName: inputThemeName = themeNames.custom,
}) => {
  const [state, setState] = useState({
    themeName: inputThemeName,
  });

  const changeTheme = useCallback((themeName) => {
    setState(prevState => ({
      ...prevState,
      themeName,
    }));
  }, []);

  const contextValue = useMemo(() => ({
    changeTheme,
    theme: ThemesToThemeNames[state.themeName] || defaultTheme,
  }), [state.themeName, changeTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
