import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary:{
      main: '#ff5410'
    },
    secondary:{
      main: '#76ff03'
    }, 
    info:{
      main:'#d500f9'
    }
  },
  typography: {
    
    h1:{
      fontSize: 50
    },
    h4:{
      fontSize: 32
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
