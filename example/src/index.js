import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {ThemeProvider} from "styled-components";
import {store} from './store'

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'purple',
    highlight: 'orange'  // color used for CTA and errors
  },
  defaults: {
    font: '1.6rem', // size of font for inputs, labels
    radius: '0' // radius of text fields, buttons
  },
  wavelib: {
    WOptionButton: {
      solid: false // boolean if the radio or radio should be filled in completely or use traditional circle and checkmark.
    },
    WLabel: {
      overlap: true // if label should overlap the text field.
    }
  }

}

ReactDOM.render(<ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>
    , document.getElementById('root'))
