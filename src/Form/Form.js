import { useState } from "react"
let userDataArray = [];
let testInput;

const Form = (props) => {

    const [userInput, ChangeUserInput] = useState('');
    
    const inputHandler = (event) => {
        ChangeUserInput(event.target.value)
        testInput = event.target.value;
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        props.onInputTranser(testInput);
        ChangeUserInput('');
        userDataArray.push(testInput);
        props.onListTransfer(userDataArray)
        console.log(userDataArray)
    }

    return(
        <form onSubmit = {SubmitHandler}>
            <p>{props.onStringTransfer}</p>
            <label>Enter data: </label>
            <input type = 'text' onChange = {inputHandler} value = {userInput}/>
            <button>Submit</button>
        </form>
    )
}
export default Form