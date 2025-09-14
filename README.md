
# devdependency
- typscript
- prettier

# Terms
- library & framework
- SPA & MPA
- atomic design

# Data type

const a = 10; // memory A
const b = 10; // memory B

const c = {}; // memory C
const d = c; // memory C
const e = {}; // memory E

- primitive type: string, number, boolean, null, undefiend, symbol
  - so sánh tham trị
- non-primitive type: array, object, function ...
  - so sánh tham chiếu -> sao sánh vùng nhớ

# pure function
1. receive input -> return output
2. not dependency outsite variable
3. not effect



# Atomic Design with react
Create component 
- Button
- BasicModal -> show/hide modal + content
- Withdrawal page
- Form: input, dropdown, password ...
- WithdrawalForm: input, button, select ...
- WithdrawalFormModal: Form, button ...

-------------

- atoms: Buton, Typography, Dropdown, Select, Input ... -> receive props and show UI
- molecules: BasicModal, WithdrawalForm, (WithdrawalFormModal - tien), Form
  - wrap background, style
  - not strong buisiness component
  - show/hide 
  => Generic Component (BasicModal: typography + button + slot content ...)
- organisms: WithdrawalFormModal
  - specific domain component
  - business component
  => Specific Component (WithdrawalFormModal: typography + button + Form + call api + validate form ...)
- pages: Withdrawal
