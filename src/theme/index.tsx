import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { THEMES } from '../utils/constants';
import { defaultSettings } from '../contexts/SettingsContext';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: '#a4a1fa'
      },
      secondary: {
        main: '#7b6ffc'
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
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
      inputBackgroud: '#f0f0f0',
      inputPlaceHolder: '#aaa',
      linkHover: '#ff7e20'
    }
  },
  {
    name: THEMES.DARK,

    palette: {
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34'
      },
      primary: {
        main: '#8a85ff'
      },
      secondary: {
        main: '#8a85ff'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
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
      inputBackgroud: '#f0f0f0',
      inputPlaceHolder: '#aaa',
      linkHover: '#ff7e20'
    }
  }
];

export type IThemeOptions = typeof themesOptions[0];
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
