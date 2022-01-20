import './App.css';
import Message from './message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='txt'>Начать изучение React</h1>
        <Message text='ReactJS - самый популярный на сегодня инструмент.'  />
        <button className='btn' style={{marginTop:'50px'}}>React start</button>
      </header>
    </div>
  );
}

export default App;
