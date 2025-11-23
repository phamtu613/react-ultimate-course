export const setProduct = (products = []) => {
  return {
    type: 'SET_PRODUCT',
    payload: products
  }
}


/*
{
  id: xx,
  name: xx,
  price: xx,
  quality: xx
}
*/
export const addToCart = (product: any) => {
  return {
    type: 'PRODUCT/ADD_TO_CART',
    payload: product
  }
}

export const setLoading = (isLoading: boolean) => {
  return {
    type: 'PRODUCT/SET_LOADING',
    payload: isLoading
  }
}