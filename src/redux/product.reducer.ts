import type { IAction } from "@/types/redux"

export const initialState = {
  products: [],
  carts: [],
  isLoading: false
}

export const productReducer = (state = initialState, action: IAction) => {
  console.log('productReducer', {
    state,
    action
  })
  switch (action.type) {
    case 'PRODUCT/SET_PRODUCT': {
      return {
        ...state,
        products: action.payload
      }
    }
    case 'PRODUCT/ADD_TO_CART': {
      return {
        ...state,
        carts: [...state.carts, action.payload]
      }
    }
    case 'PRODUCT/SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    default:
      return state;
  }
}