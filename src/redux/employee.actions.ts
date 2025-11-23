export const setEmployee = (employess = []) => {
  return {
    type: 'EMPLOYEE/SET_EMPLOYEE',
    payload: employess
  }
}

export const showLoading = () => {
  return {
    type: 'EMPLOYEE/SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'EMPLOYEE/HIDE_LOADING'
  }
}

export const setLoading = (isLoading: boolean) => {
  return {
    type: 'EMPLOYEE/SET_LOADING',
    payload: {
      isLoading
    }
  }
}