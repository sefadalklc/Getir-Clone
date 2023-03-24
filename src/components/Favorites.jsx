import React from 'react'
import x from "../api/products.json"
import Category from './ui/Category';
import { useState,useEffect } from 'react';
import ProductItem from './ui/ProductItem';

const Favorites = () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    setProducts(x)
  }, [])


  return (
    <div>
      <h3 className='text-sm font-semibold mb-3'>Favoriler</h3>
      <div className="grid grid-cols-8 gap-0.1px bg-white rounded-lg overflow-hidden">
            {!x.length && "Yükleniyor..."}
          {products.length && products.map(product => <ProductItem key={product.id} product={product} />)}
          </div>
    </div>
  )
}

export default Favorites