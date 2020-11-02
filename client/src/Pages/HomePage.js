import React ,{useEffect} from 'react'
import {Row,Col} from "react-bootstrap"
import ProductCard from "../Components/Card/ProductCard"
import {useDispatch,useSelector} from "react-redux"
import {GetProducts} from "../Redux/actions/productActions"
import Loader from "../Components/Common/Loader"
import Message from "../Components/Common/Message"



const HomePage = () => {
  const dispatch = useDispatch()

  const productList=useSelector((state)=>state.productList)
  const {loading,error,products}=productList

  useEffect(()=>{
    dispatch(GetProducts())
  },[dispatch])


    return (
        <>
            <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
  
        </>
    )
}

export default HomePage
