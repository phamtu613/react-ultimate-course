import Typography from '../atoms/Typography'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

/* dynamic form
form1: first name, last name
form = {
  first_name: {
    label: 'First Name',
    type: 'text',
    validate: xxx
  }
}
form2: first name, last name, email
*/

function Form() {
  return (
    <form>
      <Typography />
      <Input />

      <Button />
    </form>
  )
}

export default Form