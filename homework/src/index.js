import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {
  ThemeProvider,
  useTheme,
  createTheme,MuiThemeProvider
 } from "@material-ui/core/styles";
 
 import { createStyles, makeStyles } from '@material-ui/core';

 const useGlobalStyles = makeStyles(() =>
   createStyles({
     '@global': {
       html: {
         '-webkit-font-smoothing': 'antialiased',
         height: '100%',
         width: '100%'
       },
       body: {
         height: '100%',
         width: '100%'
       },
       '#root': {
         height: '100%',
         width: '100%'
       }
     }
   })
 );
 

 const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
      
    },
    secondary: {
      main: "#0098FF",
      
    },
  },
 });
 
 const GlobalStyles = () => { useGlobalStyles(); return null; };


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
    
    </BrowserRouter>
    <GlobalStyles />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
