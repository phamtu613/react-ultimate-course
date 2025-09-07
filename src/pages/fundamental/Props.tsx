import Card from "../../components/molecules/Card"

function Button({ text = 'Button'}) {
  // code logic check role 
  // yes return children
  // no return null
  return <button>{text}</button>
}

interface TwoButtonProps extends React.PropsWithChildren {
  type: "button" | "submit" | "reset" | undefined,
  onClick: () => void,
  className: string
}

function TwoButton({ children, ...restProps } : TwoButtonProps) {
  // code logic check role 
  // yes return children
  // no return null
  // return <button type={type} onClick={onClick} className={className}>{text}</button>
  return <button {...restProps}>{children}</button>
}

function AccessControl({ children }: React.PropsWithChildren) {
  return children
}

export interface Person {
  firstName: string,
  lastName: string
}

/*
admin: can delete, can update, can create, can import
dashboard
  - create, delete, export, import
product:
  - delete, create

// operator: can update, can import
product/action/delete: can delete

// member

*/

function Props() {
  const city = {
    ward: 14,
    year: 2000
  }
  return (
    <div>
      <h1>Props</h1>

      <AccessControl>
        <Card 
          name="Card 1" // string
          colors={['red', 'green']} // array
          onClick={() => {}} // function
          person={{
            firstName: 'tony',
            lastName: 'nguyen'
          }} // object
          name-bird="owl"
          component1={Button} // react type
          component2={<Button text="Component2" />} // react element
          {...city}
        />
      </AccessControl>

      <AccessControl>
        <TwoButton 
          type="button"
          onClick={() => {}}
          className="flex"
        >
          this is children button
        </TwoButton>

      </AccessControl>

     

    </div>
  )
}

export default Props