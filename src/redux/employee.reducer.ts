import type { IAction } from "@/types/redux"

export const initialState = {
  employees: [],
  isLoading: false,
  idEmployeeSelected: null
}

/* javascript
function updateEmployee {
  return  {
    firstName: 'xxx',
    lastName: 'xxx',
    employees: 'xx'
  }
}
const object = updateEmployee();
object.lastName, object.employees
*/

export const employeeReducer = (state = initialState, action: IAction) => {
   console.log('employeeReducer', {
    state,
    action
  })
  switch (action.type) {
    case 'EMPLOYEE/SET_EMPLOYEE': {
      return {
        ...state,
        employees: action.payload
      }
    }
    case 'EMPLOYEE/SHOW_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'EMPLOYEE/HIDE_LOADING': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'EMPLOYEE/SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }
    default:
      return state;
  }
}