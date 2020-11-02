import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Common/Header'
import Footer from "./Components/Common/Footer"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import {Route} from "react-router-dom"


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path ='/' exact component={HomePage}/>
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App