import React, { Component } from 'react';
import NavBar from './components/navBar'
import BeerList from './components/beerList'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {

    const theme = createMuiTheme({
      palette: {
        type: 'light',
        primary: Colors.orange,
        secondary: Colors.deepOrange,
      },
      typography: {
        useNextVariants: true,
      },
    });

    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
          <NavBar />
          <BeerList />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
