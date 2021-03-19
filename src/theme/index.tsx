import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import { THEMES } from '../utils/constants';
import { defaultSettings } from '../contexts/SettingsContext';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    typography: {
      fontFamily: 'Cormorant Garamond, romantisch, Roboto',
      subTitle: { fontSize: 12 }
    },
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
        default: '#fafafa',
        paper: '#fff',
        bebride: '#c7bfe6',
        gradienteStart: 'a195d5',
        gradienteEnd: 'e9e5f5',
        gradient:
          'linear-gradient(to right, #a195d5 0%, #c7bfe6 52%, #e9e5f5 100%)'
      },
      text: {
        primary: 'rgba(0,0,0,0.9)',
        secondary: 'rgba(255,255,255,0.70)',
        disabled: 'rgba(0,0,0,0.38)',
        hint: 'rgba(0,0,0,0.38)'
      },
      primary: {
        light: '#faf2ff',
        main: '#c7bfe6',
        dark: '#968fb4',
        contrastText: '#000'
      },
      secondary: {
        light: '#856bd4',
        main: '#533fa2',
        dark: '#1e1772',
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
    typography: {
      fontFamily: 'Cormorant Garamond, romantisch, Roboto',
      subTitle: { fontSize: 12 }
    },
    palette: {
      action: {
        active: '#fff', // ok
        hover: '#acacac', // ok
        text: '#fff', //ok
        textHover: 'rgba(255, 255, 255, 0.6)', // ok
        selected: 'rgba(255, 255, 255, 0.4)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
        linkHover: '#ff7e20'
      },
      background: {
        default: '#202020',
        paper: '#1e1e1e',
        bebride: '#c7bfe6',
        gradient:
          'linear-gradient(to right, #545353 0%, #202020 52%, #1e1e1e 100%)'
      },
      text: {
        primary: '#ffffff',
        secondary: '#d0d3e1',
        disabled: '#e6e5e8',
        hint: '#e6e5e8',
        normal: '#f8f9fa',
        light: '#757575'
      },
      primary: {
        light: '#3f3f3f',
        main: '#202020',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#856bd4',
        main: '#533fa2',
        dark: '#1e1772',
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
          src: `url('/fonts/romantisch/romantisch-Regular.ttf') format('truetype')`,
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontDisplay: 'swap'
        },
        '*': {
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        },
        body: {
          fontFamily: 'Cormorant Garamond',
          overflowY: 'auto',
          overflowX: 'hidden'
        }
      }
    }
  };

  return theme;
};

export default createTheme;
