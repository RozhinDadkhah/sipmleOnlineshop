import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions'
import '../styles/ProductList.css'
import axios from 'axios'

const ProductsList = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("ERR", err);
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='productList'>
            <ProductComponent />
        </div>
    )
}

export default ProductsList

