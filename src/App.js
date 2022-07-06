
import './App.css';
import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import { useState } from 'react';

const listArray = [];
function App() {

  const stringData = "This is form App.js to Form.js"
  const [userInput, ChangeUserInput] = useState('')
  const [buttonInput, ChangeButtonInput] = useState('');
  const [listInput, ChangeListInput] = useState('')

  const SubmitTranserHandler = (value) => {
    ChangeUserInput(value)
    listArray.push(value)
  }

  const ButtonHandler = (value) => {
    ChangeButtonInput(value)
  }
  const listHandler = (value) => {
    ChangeListInput(value)
    console.log(value);
    
  }

  return (
    <div className="App">
      <Form onStringTransfer = {stringData} onInputTranser = {SubmitTranserHandler} onListTransfer={listHandler}/>
      <p>{userInput}</p>
      <p>{buttonInput}</p>
      <ThreeButtons onButtonTransfer = {ButtonHandler}/>
      {listArray.map((item, index) => <p key={index}>{(index +1)+': ' + item}</p>)}
      
    </div>
  );
}

export default App;
