import ResponsiveDrawer from './components/ResponsiveDrawer'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: teal,
    primary: teal
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
