/** Material-ui */
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '../../theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import useSettings from '../../hooks/useSettings';

/** Styled-components */
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from '../../styles/global';

function MyThemeProvider({ children }) {
  const { settings } = useSettings();

  const theme = createTheme({ theme: settings.theme });

  return (
    <MuiThemeProvider theme={theme}>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      {children}
      {/* <GlobalStyle /> */}
      {/* </ThemeProvider> */}
    </MuiThemeProvider>
  );
}

export default MyThemeProvider;
