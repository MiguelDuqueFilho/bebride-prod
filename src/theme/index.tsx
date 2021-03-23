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
        default: '#fafafa', // uso no background input
        paper: '#fff',
        field: '#f0f0f0',
        bebride: '#c7bfe6',
        gradienteStart: 'a195d5',
        gradienteEnd: 'e9e5f5',
        gradient:
          'linear-gradient(to right, #a195d5 0%, #c7bfe6 70%, #e9e5f5 100%)'
      },
      text: {
        primary: 'rgba(0,0,0,0.9)', // uso input text
        secondary: 'rgba(0,0,0,0.60)', // uso label input
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
        field: '#2e2e2e',
        bebride: '#c7bfe6',
        gradient:
          'linear-gradient(to right, #545353 0%, #202020 70%, #1e1e1e 100%)'
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
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        },
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
