import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MainLayout from '../views/Main/MainLayout';
import Login from '../views/Login';
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from "@material-ui/core/CssBaseline";
import { Icon } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#242323",
      dark: "#D2D2D2",
      light: "#949494"
    },
    secondary: {
      main: '#CAA127',
    },
    background:{
      default: "#242323",
      paper: '#949494',      
    },
    text:{
      primary: "#CAA127",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/main" render={props=>(<MainLayout {...props}/>)}/>
          <Route exact path="/" render={props=>(<Login {...props}/>)}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
