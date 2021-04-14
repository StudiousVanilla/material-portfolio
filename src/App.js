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
    fontFamily: 'Lato, sans-serif',  
    h1:{
      fontSize: 50
    },
    h2:{
      fontSize: 45
    },
    h4:{
      fontSize: 32
    },
    h6:{
      fontSize: 20
    }
  },
  overrides: {
    MuiStepLabel:{
      LabelContainer: { 
        label:{
          root: { 
            color:'black',
            fontSize: 13, 
          },
        },
      },
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      laptop: 960, 
      md: 1260,
      mlg: 1450,
      lg: 1550,
      xl: 1800,
    },
  },
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
