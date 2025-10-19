import React from 'react'

/* wrapper component
- use common logic
- use common state
- use common layout
*/

function Template1({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

export default Template1