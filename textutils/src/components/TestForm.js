import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared","success");

  };

  const handleCopy =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied  Text","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking Text","success");

  };
  
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            name=""
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          disabled={text.length===0}
        >
          Speak
        </button>
        
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in textbox to preview"}</p>
      </div>
    </>
  );
}
