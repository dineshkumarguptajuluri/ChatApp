
import Sidebar from '../ChatScreen/Sidebar'
import Chat from '../ChatScreen/Chat'
const ChatHome = () => {


  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatHome;