import React, {useState} from 'react'

function Today(props) {
    const[text,setText]=useState('Enter your text');
 

   const change =(e)=>{
    setText(e.target.value)
   }
 
   const toUpperCase=()=>{
    const newText = text.toUpperCase();
    setText(newText);
    console.log("Convert into Uppercase"+text)
    props.showAlert("Converted to Uppercase" +" "+ "successfully");
    
   }

   const toLowerCase =()=>{
    const newText = text.toLowerCase();
    setText(newText);
    console.log("COnverted to lowercase"+newText)
    props.showAlert("Converted to Lowercase" +" "+ "successfully");
   }
   const[split ,clearText]=useState("Enter your text");
   const Clear=()=>{
    const newText = ""
    setText(newText);
    console.log("Convert into Uppercase"+split);
    props.showAlert("Data cleared" +" "+ "successfuly");
   }
 const copyToClipboard = () =>{
   let textarea  = document.getElementById("text");
   textarea.select();
   
   navigator.clipboard.writeText(textarea.value);
   props.showAlert("Your data has been copied" +" "+  "successfully");
   
 }
  
 const extraspace=()=>{
  const newText = text.trim();
  setText(newText);
  console.log("Convert into Uppercase"+text);
  props.showAlert("Extra space removed" +" "+  "successfully");
 }

 const boldletter=()=>{
  
  let bold1=document.getElementById("text");
  bold1.style.fontWeight="bold";
  props.showAlert("Converted to Bold" +" "+  "success");
 }
  
 const ItalicValue=()=>{
  let italic2 = document.getElementById("text");
  italic2.style.fontStyle="italic";
  props.showAlert("Converted to Italic" +" "+  "successfully");
 }

   
 const UnderlineVal=()=>{
  let Underline3 = document.getElementById("text");
  Underline3.style.textDecoration="underline";
  props.showAlert("Sentence has been Underlined" +" "+  "successfully");
 }

  return (
    <div>
      <div className="container">
        <center><h1>ENTER YOUR DATA</h1></center>
        <center><textarea rows='5' cols='105' placeholder={text} value={text} onChange={change} id='text'></textarea></center>
        </div>
       <div id='Buttons'>
       <center>
        <button className='btn1' onClick={toUpperCase} style={{margin:"5px"}}>Convert to UpperCase</button>

        <button className='btn2' onClick={toLowerCase} style={{margin:"5px"}}>Convert to LowerCase</button>
        <button className='btn3'  onClick={Clear} style={{margin:"5px"}}>Clear All</button>
        <button className='btn4'  onClick={copyToClipboard} style={{margin:"5px"}}>Copy Text</button>
        <button className='btn5' onClick={extraspace} style={{margin:"5px"}}>Remove extra space</button>
        <button className='btn6'  onClick={boldletter} style={{margin:"5px"}} id='bold'>Convert to Bold</button>
        <button className='btn7'  style={{margin:"5px"}} onClick={ItalicValue}>italic</button>
        <button className='btn8'  style={{margin:"5px"}} onClick={UnderlineVal}>underline</button>
        <div className='container-fluid' style={{color:props.mode==='dark'?'white':"black"}}></div>
        <h1>Character</h1>
        <p>{text.length}</p>
        <h1>Preview</h1>
        <p>{text}</p>
        <h1>Word</h1>
        <p>{text.split(" ").filter((element)=>{
        return element.length !==0}).length
        };
       
        </p>
        </center>
        </div>
        {/* <center><h1 style={{marginTop:"50px"}}>Word Counter</h1></center> */}
    </div>
  )
}

export default Today;
