import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'

export default function Textform() {
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        console.log("upper case was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const clearText = () =>{
        let newText= ""
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("upper case was clicked")
        setText(event.target.value)
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}
const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
  };
//   function handleDuplicates(){
//     let wordArr = text.split(" ");
//     let newText = wordArr.filter((item, pos)=>{
//         return wordArr.indexOf(item) === pos;
//     })
//     newText = newText.join(" ");
//     setText(newText);
// }
const WhiteSpace = () => {
    let updated_text = text.replace(/\s/g, '')
    setText(updated_text)
}
const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
}
  return (
    <>
    <div className='container'>
        <h1>Start the demo</h1>
        <div className='mb-3'>
            <label for="myBox" className='form-label'>Entry Text Below</label>
            <textarea class="form-control" id="myBox" onChange={handleOnChange} value={text} rows="3"></textarea>
            <button className='btn btn-primary mt-5' onClick={handleUpClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mt-5 ms-3' onClick={downloadTxtFile}>Download Text</button>
            <button className='btn btn-primary mt-5 ms-3' onClick={reversed}>Reverse Text</button>
            <button className='btn btn-primary mt-5 ms-3' onClick={WhiteSpace}>White Space</button>
            <button className='btn btn-primary mt-5 ms-3' onClick={handleCopy}>Copy Text</button>
            {/* <button className='btn btn-primary mt-5 ms-3' onClick={handleDuplicates}>Remove Duplicate Word</button> */}
            <button className='btn btn-danger mt-5 ms-3' onClick={clearText}>Clear</button>
        </div>
    </div>
    <div className='container my-3'>
        <h1>Your Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split('').length} minutes</p>
    </div>
    </>
  )
}
