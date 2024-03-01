import React, { useContext } from 'react'
import Sidebar from '../ChatScreen/Sidebar'
import Chat from '../ChatScreen/Chat'
import {AuthContext} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
const ChatHome = () => {
  const { currentUser } = useContext(AuthContext);
  const navigator=useNavigate();
  if(!currentUser){
    navigator('/login');
  }
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