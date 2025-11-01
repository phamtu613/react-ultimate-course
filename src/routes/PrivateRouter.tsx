import React from 'react'
import { Navigate } from 'react-router';

/*
user loginded -> generate access token -> save in localstorage
*/

function PrivateRouter({ children }: React.PropsWithChildren) {
  console.log('private router-----------------');
  const access_token = window.localStorage.getItem('access_token');

  if (!access_token) {
    return <Navigate to="/jsx" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default PrivateRouter