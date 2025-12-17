import { Outlet, useNavigate } from 'react-router';

function User() {
  const navigate = useNavigate();
  console.log('user-------------------')
  // const [tab, setTab] = React.useState('personal')

  function onSwitchTab(tab: string) {
    // setTab(tab);
    navigate(`/user/${tab}`)
  }

  return (
    <div>
      <h1>User</h1>
      <br />
      First Name: Tony <br />
      Last Name: Nguyen <br />
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <div
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => onSwitchTab('personal')}
            >
              Personal Information
            </div>
          </li>
          <li className="me-2">
            <div
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              onClick={() => onSwitchTab('checkout')}
            >
              Checkout
            </div>
          </li>
        </ul>
      </div>

      <Outlet />

      {/* <div>
        {tab === 'personal' && <div>this is personal</div>}

        {tab === 'checkout' && <div>this is checkout</div>}
      </div> */}




    </div>
  )
}

export default User