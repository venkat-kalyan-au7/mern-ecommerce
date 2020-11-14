import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter} from "react-router-dom"
import Header from './Components/Common/Header'
import Footer from "./Components/Common/Footer"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import Cart from "./Pages/CartPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import {Route} from "react-router-dom"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path ='/' exact component={HomePage}/>
          <Route path ='/register' exact component={RegisterPage}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' exact component={Cart}/>
        </Container>
      </main>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App