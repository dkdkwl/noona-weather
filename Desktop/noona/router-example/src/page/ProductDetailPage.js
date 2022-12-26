import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id } = useParams()


  return (
    <div>show ProductDetailPage{id}</div>
  )
}

export default ProductDetailPage