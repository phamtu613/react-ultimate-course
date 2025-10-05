import React from 'react'
import EmployeeCreateModal from '../../components/organisms/EmployeeCreateModal'
import Button from '../../components/atoms/Button';

function List() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      
    <Button onClick={() => setOpen(true)}>Create Employee</Button>
    
    <EmployeeCreateModal 
      open={open}
      closeModal={() => setOpen(false)}
    />
      
    </div>
  )
}

export default List