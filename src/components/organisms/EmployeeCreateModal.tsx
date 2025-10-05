import BasicModal from '../molecules/BasicModal'
import Title from '../atoms/Title'
import Input from '../atoms/Input'
import Typography from '../atoms/Typography'

interface EmployeeCreateModalProps {
  open: boolean,
  closeModal: () => void
}

/*
 - input form
 - validate form
 - call api to create
 - success -> ?
 - fail -> ?
*/
function EmployeeCreateModal({ open, closeModal }: EmployeeCreateModalProps) {
  return (
    <>
      <BasicModal 
        open={open}
        closeModal={closeModal}
      >
       <form>
          <Title>
              First Name
          </Title>
          <Input />
          <Typography>Please enter first name</Typography>
        </form>
      </BasicModal>
    </>
  )
}

export default EmployeeCreateModal