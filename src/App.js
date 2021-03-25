import ResponsiveDrawer from './components/ResponsiveDrawer';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9d46ff'
    },
    secondary:{
      main:'#1de9b6',
    }, 
    info: deepOrange
  },
  typography: {
    
    h1:{
      fontSize: 50
    }
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
