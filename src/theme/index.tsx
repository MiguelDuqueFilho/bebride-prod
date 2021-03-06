import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import { THEMES } from '../utils/constants';
import { defaultSettings } from '../contexts/SettingsContext';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      action: {
        active: '#644fba', // ok
        hover: '#7e6cc6', // ok
        text: '#fff', //ok
        textHover: 'rgba(255, 255, 255, 0.6)', // ok
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
        linkHover: '#ff7e20'
      },

      background: {
        light: '#a598d7',
        default: '#fafafa',
        dark: '#7a6ab9',
        paper: '#fff',
        mainGradient: 'linear-gradient(to right, #d2cbeb, #7a6ab9)'
      },
      primary: {
        light: '#d2cbeb',
        main: '#c7bfe6',
        dark: '#8b85a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#958bfc',
        main: '#7167e4',
        dark: '#533fa2',
        contrastText: '#fff'
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: '#000'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#fff'
      },
      text: {
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.54)',
        disabled: 'rgba(0,0,0,0.38)',
        hint: 'rgba(0,0,0,0.38)',
        normal: '#f8f9fa',
        light: '#757575'
      }
    },

    // styled-components

    color: {
      background: '#ffffff',
      toggle: '#533fa2',
      primary: '#c7bfe6',
      section: '#E78F8E',
      title: '#4d495d',
      text: '#757575',

      socialText: '#acacac',
      socialTextHover: '#644fba',
      gradientStart: '#a598d7',
      gradientEnd: '#7a6ab9',
      button: '#7e6cc6',
      buttonHover: '#644fba',
      buttonText: '#FAFAFA',
      boxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',

      light: '#f8f9fa',
      white: '#fff',
      black: '#000',

      backgroundTitle: '#E78F8E',
      input: '#333',
      inputIcon: '#acacac',
      inputBackground: '#f0f0f0',
      inputPlaceHolder: '#aaa',
      linkHover: '#ff7e20'
    }
  },
  {
    name: THEMES.DARK,

    palette: {
      action: {
        active: '#644fba', // ok
        hover: '#7e6cc6', // ok
        text: '#fff', //ok
        textHover: 'rgba(255, 255, 255, 0.6)', // ok
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        light: '#a598d7',
        dark: '#7a6ab9',
        paper: '#282C34',
        mainGradient: 'linear-gradient(to right, #282C34, #7a6ab9)'
      },
      primary: {
        main: '#8a85ff',
        light: '#f9f1ff',
        dark: '#533fa2',
        contrastText: '#fff'
      },
      secondary: {
        light: '#958bfc',
        main: '#7167e4',
        dark: '#533fa2',
        contrastText: '#fff'
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: '#fff'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#fff'
      },
      text: {
        primary: '#ffffff',
        secondary: '#d0d3e1',
        disabled: '#e6e5e8',
        hint: '#e6e5e8'
      }
    },
    // styled-componentes

    color: {
      background: '#000000',
      toggle: '#2d2255',
      primary: '#c7bfe6',
      section: '#E78F8E',
      title: '#FFFDFF',
      text: '#FAFAFA',
      socialText: '#acacac',
      socialTextHover: '#644fba',
      gradientStart: '#4b3993',
      gradientEnd: '#1e1736',
      button: '#443384',
      buttonHover: '#644fba',
      buttonText: '#FAFAFA',
      boxShadow:
        '0 16px 24px 2px rgba(255, 255, 255, 0.12), 0 6px 30px 5px rgba(255, 255, 255,  0.10), 0 8px 10px -5px rgba(255, 255, 255,  0.2)',

      light: '#757575',
      white: '#fff',
      black: '#000',

      backgroundTitle: '#585566',
      input: '#333',
      inputIcon: '#acacac',
      inputBackground: '#f0f0f0',
      inputPlaceHolder: '#aaa',
      linkHover: '#ff7e20'
    }
  }
];

type MyThemeOptions = typeof themesOptions[0];
export type IThemeOptions = MyThemeOptions & ThemeOptions;
export type Itheme = IThemeOptions & Theme;

export const createTheme = (config = defaultSettings) => {
  let themeOptions = themesOptions.find(theme => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(themeOptions);

  theme.overrides = {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'romantisch',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `url('/fonts/romantisch-Regular.ttf') format('truetype')`
        },
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        },
        body: {
          overflowY: 'auto',
          overflowX: 'hidden'
        }
      }
    }
  };

  return theme;
};

export default createTheme;
