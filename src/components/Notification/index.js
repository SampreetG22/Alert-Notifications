import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="container">
      {children}
      <GrFormClose className="icon" />
    </div>
  )
}
export default Notification
