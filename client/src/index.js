import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import reduxStore from "./Redux/store"

ReactDOM.render(
  <React.StrictMode>
   <Provider store={reduxStore}>
   <BrowserRouter>
         <App />
    </BrowserRouter>
   </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
)

