import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="mainContainer">
    <h1 className="mainHeading">Alert Notifications</h1>
    <Notification>
      <div className="notiContainer">
        <AiFillCheckCircle className="tick" style={{color: 'lawngreen'}} />
        <div className="textContainer">
          <h1 className="commonText" style={{color: 'lawngreen'}}>
            Success
          </h1>
          <p className="subText">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notiContainer">
        <RiErrorWarningFill className="tick" style={{color: 'red'}} />
        <div className="textContainer">
          <h1 className="commonText" style={{color: 'red'}}>
            Error
          </h1>
          <p className="subText">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notiContainer">
        <MdWarning className="tick" style={{color: 'yellow'}} />
        <div className="textContainer">
          <h1 className="commonText" style={{color: 'yellow'}}>
            Warning
          </h1>
          <p className="subText">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
    <Notification>
      <div className="notiContainer">
        <MdInfo className="tick" style={{color: 'blue'}} />
        <div className="textContainer">
          <h1 className="commonText style={{color: 'blue'}}">Info</h1>
          <p className="subText">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
