
/*
&&. - vế trái, phải
- vế trái là true -> lấy vế phải
- vế trái là false -> lấy vế trái
' ' && 'tony' -> ''
'tony' && 'tu' -> tu 
tu && tony && tien -> tien 
tien && ' ' -> ? ' '

||
tien || tony || tu -> tien
'' || tony ->  ' '
tony || ' ' -> ? tony
' ' || tony || tu -> tony

data type
coreion type
Boolean(xxx) => return true/false
String(xx) => return string
Number(xx) => return number
*/


import React from 'react'


function LogoutButton() {
  return (
    <button>Logout</button>
  )
}

function LoginButton() {
  return (
    <button>Login</button>
  )
}

function ConditionalRendering() {
  const [numbers] = React.useState(['123']);
  let renderButon = <LoginButton />;

  if(numbers.length > 0) {
    renderButon = <LogoutButton />
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>
      {numbers && Array.isArray(numbers) && numbers.map((content) => (
        <div>{content}</div>
      ))}
      <br />
      Button: {renderButon}
    </div>
  )
}

export default ConditionalRendering