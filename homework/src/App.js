import './App.scss';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextField, Fab } from '@material-ui/core'
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'




const AUTHOR = {
  me: 'me',
  bot: 'bot'
}

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = useCallback((event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  }, []);

  const handleButton = () => {
    setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
    setValue('');
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHOR.me) {
      setMessageList([...messageList, { text: 'Я бот,и я плохо говорить по-английски', author: AUTHOR.bot }]);

    }
  }, [messageList])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>

      <div className="App">
        <div className='list'>

          <List sx={{ width: '200px', maxWidth: 200, bgcolor: 'gbackground.paper' }}>
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`ЧАТ ${value}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className='messageform'>
          <div className='messageLs'>
            {messageList.map((message, index) => (<div className={`messageDesign ${message.author === 'me' ? 'me' : 'bot'}`}>
              {message.text} <sup>{message.author}</sup></div>))}

          </div>
          <div className='actions'>
            <TextField
              value='some value' autoFocus
              style={{ margin: "20px" }}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={value}
              onChange={handleChange}
            />
            <Button onClick={handleButton} variant="contained" endIcon={<SendIcon />} >
              Send
            </Button>
          </div>
        </div>
        {/* </div> */}


      </div>
    </div>
  );
}

export default App;
