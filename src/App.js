import ResponsiveDrawer from './components/ResponsiveDrawer'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import {deepOrange, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9d46ff'
    },
    secondary: teal,
    info: deepOrange
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveDrawer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
