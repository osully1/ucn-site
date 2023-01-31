import { Button } from 'react-bootstrap'

const MenuButton = ({ setTab, tab }) => (
  <Button 
    className="d-flex w-100 rounded-0 border--bottom border-primary-hover align-items-center grad-vertical ps-24 py-8 text-primary fs-5"
    onClick={() => setTab(tab)}
  >
    <p className="mb-0">{tab}</p>
  </Button>
)

export default MenuButton