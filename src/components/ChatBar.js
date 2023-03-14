import React, {useState, useEffect} from 'react'

const ChatBar = ({socket}) => {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

  return (
    <div className='chat__sidebar'>
        <h2>🌌ZeroChat🌌</h2>
        <div>
            <h4  className='chat__header'>⚡ Online Users</h4>
            <div className='chat__users'>
                {users.map(user => <div key={user.socketID}>✳ {user.userName == "" ? <i>🕵️ Anonymous</i> : user.userName}</div>)}
            </div>
        </div>
  </div>
  )
}

export default ChatBar