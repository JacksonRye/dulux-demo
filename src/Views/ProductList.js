import React from 'react'
import ProductItem from '../Components/ProductItem'

const ProductList = ({ match }) => {

    const {params} = match

    const {color} = params


    return (
        <div className="ProductList">

            <ProductItem color={color} />
            <ProductItem color={color} />
            <ProductItem color={color} />
            <ProductItem color={color} />
            <ProductItem color={color} />
            <ProductItem color={color} />
           
            
        </div>
    )
}

export default ProductList
