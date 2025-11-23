import { combineReducers, createStore} from 'redux';
import { employeeReducer } from './redux/employee.reducer';
import { productReducer } from './redux/product.reducer';

export const rootReducers = combineReducers({
  employee: employeeReducer,
  product: productReducer,
});

export const store = createStore(rootReducers);

/*
const initState = {
  employee: {
    employees: [],
    isLoading: false,
    idEmployeeSelected: null
  },
  product: {
    products: [],
    carts: [],
    isLoading: false
  }
}

const rootReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'EMPLOYEE/SET_EMPLOYEE': {
      return {
        ...state,
        employee: {
          ...state.employee,
          employees: action.payload
        }
      }
    }
    case 'EMPLOYEE/SHOW_LOADING': {
      return {
        ...state,
        employee: {
          ...state.employee,
          isLoading: action.payload
        }
      }
    }
    case 'EMPLOYEE/HIDE_LOADING': {
      return {
        ...state,
        employee: {
          ...state.employee,
          isLoading: action.payload
        }
      }
    }
    case 'EMPLOYEE/SET_LOADING': {
      return {
        ...state,
        employee: {
          ...state.employee,
          isLoading: action.payload
        }
      }
    }
    case 'PRODUCT/SET_PRODUCT': {
      return {
        ...state,
        product: {
          ...state.product,
          products: action.payload
        }
      }
    }
    case 'PRODUCT/ADD_TO_CART': {
      return {
        ...state,
        product: {
          ...state.product,
          carts: [...state.carts, action.payload]
        }
      }
    }
    case 'PRODUCT/SET_LOADING': {
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: action.payload
        }
      }
    }
    default: 
      return state
  }
}

*/


