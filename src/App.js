import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './hocs/Layout';
import './App.css';
import Home from './components/Home';
import Table from './components/Table';
import Contact from './components/Contact';
import MainAuthentication from './components/MainAuthentication'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { purple, green, blue } from '@material-ui/core/colors'


const theme = createTheme({
  palette: {
    primary: {
      main:blue[500]
    },
    secondary: blue,

  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={MainAuthentication} />
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
