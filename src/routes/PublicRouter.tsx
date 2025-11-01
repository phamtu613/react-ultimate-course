import React from 'react'

function PublicRouter({ children }: React.PropsWithChildren) {
  console.log('public router-----------------')
  return (
    <>{children}</>
  )
}

export default PublicRouter