import React from 'react'
import Button from '../../components/atoms/Button';
import BasicModal from '../../components/molecules/BasicModal';

/*
uncontroller/controller component/input/form
<input />

react hook form + yup
formik + yup/zod
*/

function Form() {
  const [lastName, setLastName] = React.useState('');
  const lastNameRef = React.useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = React.useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('submit form', {
      firstName: lastNameRef?.current?.value,
      lastName
    })
  }

  function onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value)
  }

  console.log('Form Render')
  return (
    <div>
      <form onSubmit={handleSubmit}>
        First Name: <input id="firstName" defaultValue="tony" type="text" ref={lastNameRef} /> <br />
        Last Name: <input type="text" value={lastName} onChange={onChangeLastName} /> <br />
        <button type="submit">Submit</button>
      </form>
      <br />

      Svg image: <img src="assets/images/react.svg" /> <br />

      Background svg: <div className='bg-svg-react'></div>
      <br />

      <Button onClick={() => setOpen(true)}>show invoice detail</Button>

      <BasicModal 
        open={open}
        closeModal={() => setOpen(false)}
      >
        this is invoice detail
      </BasicModal>
    </div>
  )
}

export default Form