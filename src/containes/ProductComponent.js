import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/ProductComponent.css'

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)

    const renderList = products.map((product) => {

        const { id, title, price, categoty, image } = product;

        return (
            <div className='prooduct' key={id}>
                <Link to={`/product/${id}`} >
                    <div className='linkcards'>
                        <div className='card'>
                            <div className='divimg'>
                                <img src={image} alt={title} className='image'/>
                            </div>
                            <div className='content'>
                                <div className='title'>{title}</div>
                                <div className='price'>$ {price}</div>
                                <div className='meta'>{categoty}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent
