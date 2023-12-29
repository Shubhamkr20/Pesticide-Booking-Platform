import React from 'react'
import "./product.css"
import Card from '../prodcard/Card'
import { productItems } from '../../data'

function Products() {
  return (
    <>
    <div id="products">
      <div className='b-container'>

    {productItems.map((product) => (
      <Card key={product.id} props={product} />
      ))}
      </div>
    </div>
  </>
  )
}

export default Products
