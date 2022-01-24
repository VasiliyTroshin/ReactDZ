import './App.scss';
import React, { useEffect, useState } from "react";

const AUTHOR = {
  me: 'me',
  bot: 'bot'
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  }

  const handleButton = () => {
    setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
    setValue('');
  }

  useEffect(()=>{
    if(messageList.length>0 && messageList[messageList.length-1].author===AUTHOR.me){
    setMessageList([...messageList, { text: 'Я бот,и я плохо говорить по-английски', author: AUTHOR.bot }]);

  }},[messageList])

  return (
    <div>
      <div className="App">
        <div className='messageLs'>
          {messageList.map((message, index) => (<div className={`messageDesign ${message.author==='me'?'me':'bot'}`}>
            {message.text} <sup>{message.author}</sup></div>))}
        </div>
        <div className='actions'>
          <input onChange={handleChange} value={value} />
          <button onClick={handleButton}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default App;
