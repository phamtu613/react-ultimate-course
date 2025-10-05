// export { default as EmployeeList } from './list';
// export { default as EmployeeCreate } from './create';
// export { default as EmployeeShow } from './show';
// export { default as EmployeeEdit } from './edit';

import EmployeeList from './list';
import EmployeeCreate from './create';
import EmployeeEdit from './edit';
import EmployeeShow from './show';

export {
  EmployeeList,
  EmployeeCreate,
  EmployeeEdit,
  EmployeeShow
}


/*
import/export default or no default

export { abc } from 'xxxx';
export default tony from 'xxxx';

using:
import tien, { abc } from 'xxxx';
import { EmployeeList } from 'xxx';
*/