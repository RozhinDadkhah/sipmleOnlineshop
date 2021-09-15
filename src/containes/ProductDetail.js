import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import '../styles/ProductDetail.css'


const ProductDetail = () => {

    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams()
    const dispatch = useDispatch()

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("err", err)
            })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="detail">
                    <div className="imgdiv">
                        <img className="image" src={image} alt='' />
                    </div>
                    <div className="info">
                        <h1>{title}</h1>
                        <h2>
                            <a className="ui teal tag label">${price}</a>
                        </h2>
                        <h3 className="category">{category}</h3>
                        <p>{description}</p>
                        <button className="btn">ADD to Cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail
