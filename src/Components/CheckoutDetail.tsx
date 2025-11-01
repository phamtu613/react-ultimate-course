import React from 'react'
import { useParams } from 'react-router'

/*
get all: GET /api/products
get one: GET /api/:productId (FE call /api/dsad-adadadas)
*/

function CheckoutDetail() {
  const params = useParams();

  console.log('CheckoutDetailCheckoutDetailCheckoutDetail: ', params)

  return (
    <div>CheckoutDetail</div>
  )
}

export default CheckoutDetail