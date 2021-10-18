import {useState,useEffect} from 'react';
import OnlineDetails from '../details/OnlineDetails'
import Input from '../Input/Input';
import queryString from 'query-string';

import io from 'socket.io-client';


import './Chat.css';
import Messages from '../Messages/Messages';
const ENDPOINT='localhost:5000';


let socket;




const Chat = ({location}) => {
   
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    const [message,setMessage]=useState('');
    const [users,setUsers]=useState([]);
    const [messages,setMessages]=useState([]);
    
    useEffect(()=>{
        const { name, room}=queryString.parse(location.search);
       

        socket=io(ENDPOINT);
        
        setName(name);
        setRoom(room);
     
        socket.emit('join',{name,room},(error)=>{
            if(error){
                alert(error);
            }
        })
    },[ENDPOINT,location.search]);

    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);})
    }, []);
    const sendMessage = (event) => {
       
        event.preventDefault();
        if(message) {
          socket.emit('sendMessage', message,()=>setMessage(''));
         
        }
        
      }

   
    return ( <div className="h1"> 

    <h1 className="title">Welcome to Let's chat</h1>
    
    <div className="outerContainer">
           

            

    <div className="container">
  
 

  <Messages messages={messages} name={name}/>

  <div className="input">
  <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
  
      {/* <input className="message-input" onChange={(e)=>{
     setMessage(e.target.value);
  
  
      }} type="text" placeholder="Enter the message" />
      <button className="send-btn" onClick ={
          e=>sendMessage(e)
  
          }>Send</button> */}
       
  
            </div>
            
        </div>
        
        <OnlineDetails users={users}/>

        

</div></div>
       
     );
    }
 
export default Chat;