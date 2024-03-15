 import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  }
  const handleLowClick = () => {
    console.log("Lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","primary")
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log("On change was clicked");
    setText(event.target.value);
  }
const [text, setText] = useState("");
// text = "Enter new text" =>Wrong way to change the state.
// setText("Enter new text here...")=>Wrong way to change the state.
  return (
    <>
    <div className='container' >
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} id="myText" rows="6" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={clearText}>clear text</button>
    </div>
    <div className="container my-3">
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").length} words, {text.length} characters</p> 
         <p>{0.008*text.split(" ").length} minutes required to read  all the words </p>
         <h1>Preview</h1> 
         <p>{text.length > 0 ? text : "No text entered yet"}</p>
    </div>
    </>
  )
}
