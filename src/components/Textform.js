import React , {useState} from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text , setText] = useState("");
    const [state, setState] = useState('');
    const toUpCase = () => {
        let setUpperCase =  state.toUpperCase();
        setText(setUpperCase);
        if(state.length > 0) {
            props.showAlert("Conversion to Uppercase Success" , "success");
        }
        else {
            props.showAlert("Please Enter Text before converting to uppercase " , "danger");
        }
    }
    const toDownCase = () => {
        let setLowerCase =  state.toLowerCase();
        setText(setLowerCase);
        if(state.length > 0) {
            props.showAlert("Conversion to Lowercase Success" , "success");
        }
        else {
            props.showAlert("Please Enter Text before converting to lowercase" , "danger");
        }
    }
    const toClear = () => {
        setState('');
        setText('');
        if(state.length > 0) {
            props.showAlert("Input Box Cleared" , "success");
        }
        else {
            props.showAlert("Please Enter Text to clear the input box" , "danger");
        }
    }
    const toReverse = () => {
        let setReverse =  state.split('').reverse().join('');
        setText(setReverse);
        if(state.length > 0) {
            props.showAlert("Text Reversed Success" , "success");
        }
        else {
            props.showAlert("Please Enter Text to reverse the text" , "danger");
        }
    }
    const toCopy = () => {
        let copyText  = document.getElementById("textBox1");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if(state.length > 0) {
            props.showAlert("Text Copy Success" , "success");
        }
        else {
            props.showAlert("Please Enter Text to copy text" , "danger");
        }
    }
    const toRemoveSpace = () => {
        let removeSpace = state.split(/[ ]+/);
        setText(removeSpace.join(" "));
        if(state.length > 0) {
            props.showAlert("Extra Space removed Successfully" , "success");
        }
        else {
            props.showAlert("Please Enter Text to remove space" , "danger");
        }
    }        
    const onChangeHandle = (event) => {
        setState(event.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="textBox1" style = {{background : props.mode ? "#042743" : "white" , color : props.mode ? "white" : "#042743"}} rows="8" value = {state} onChange = {onChangeHandle} placeholder = "Add Text Here"></textarea>
            </div>
            <div className="btn-container">
                <button className="btn btn-primary mx-3 my-3" onClick = {toUpCase}>To Upper Case</button>
                <button className="btn btn-primary mx-3 my-3" onClick = {toDownCase}>To Lower Case</button>
                <button className="btn btn-primary mx-3 my-3" onClick = {toCopy}>To Copy Text</button>
                <button className="btn btn-primary mx-3 my-3" onClick = {toReverse}>To Reverse</button>
                <button className="btn btn-primary mx-3 my-3" onClick = {toClear}>Clear</button>
                <button className="btn btn-primary mx-3 my-3" onClick = {toRemoveSpace}>To Remove Extra Spaces</button>
            </div>
            <div className="container my-5">
                <p>Time to read the above phrase is {0.008 * state.split(" ").length} minutes</p>
                <p className="wordCharCount">{state.length > 0 ? state.split(" ").length : 0} words and {state.length} character</p>
                <h1>Result Text</h1>
                <p className="my-2">{state.length > 0 ? state : "Please Enter Something to preview it here.."}</p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading : PropTypes.string.isRequired
}

Textform.defaultProps = {
    heading : "Enter Heading here"
}
