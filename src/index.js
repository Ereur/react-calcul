// import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useReducer, useState} from "react"
import ReactDOM from 'react-dom/client';
import './index.css';

var operator = null;

function Board(props){
  var number = [1,2,3,4,5,6,7,8,9,'.','0','=','AC','DEL','/','*','+','-'];
  var [num, setState, ] = useState(null);
  var [prevnum, setStaten, ] = useState(null);


  function change(value){
    setState( num =>{
      if (num == null)
        num = (String)(value)
      else 
         num = (String)(num) + (String)(value)
      return (num);
    })
  }

  function clear (){
    setStaten(prevnum = null)
    setState(num = null)
  }

  function dell(){
    setState(num=>{
      if (num == null)
        return num;
      else
      num = num.slice(0, -1);
      return (num)
    })
  }

  function operations(value, numb){
    if (numb == null)
      return;
    prevnum = String(numb) + String(value);
    setStaten(prevnum)
    num = null;
    setState(num);
    operator = value;
  }

  function  equal(prevnum, num)
  {
    var pnum;
    if (prevnum == null || num == null)
      return;
    console.log(operator);
    if (operator == "+")
       pnum = String(Number(prevnum.slice(0, -1)) + Number(num));
    else if (operator == "*")
      pnum = String(Number(prevnum.slice(0, -1)) * Number(num));
    else if(operator == "-")
      pnum = String(Number(prevnum.slice(0, -1)) - Number(num));
    else if (operator == '/')
      pnum = String(Number(prevnum.slice(0, -1)) / Number(num));
    setState(pnum)
    prevnum = null;
    setStaten(prevnum)
  }

  return (
      <div className="board">
      <div className='rectangle'>
        <div className='prev-calcul'>{prevnum}</div>
        <div className='cur-calcul'>{num}</div>
      </div>
      <div className='numbers-board'> 
        <div className='four-row'>
        <button className='square-ac' onClick={clear} >{number[12]}</button>
        <button className='square' onClick={dell} >{number[13]}</button>
        <button className='square' onClick={()=>{operations(number[14], num)}} >{number[14]}</button>
        </div>
        <div className='first-row'>
        <button className='square' onClick={()=>{change(number[0])}}>{number[0]}</button>
        <button className='square' onClick={()=>{change(number[1])}}>{number[1]}</button>
        <button className='square' onClick={()=>{change(number[2])}}>{number[2]}</button>
        <button className='square' onClick={()=>{operations(number[15], num)}} >{number[15]}</button> 
        </div>
        <div className='sec-row'>
        <button className='square' onClick={()=>{change(number[3])}} >{number[3]}</button>
        <button className='square' onClick={()=>{change(number[4])}} >{number[4]}</button>
        <button className='square' onClick={()=>{change(number[5])}} >{number[5]}</button>
        <button className='square' onClick={()=>{operations(number[16], num)}} >{number[16]}</button> 
        </div>
        <div className='third-row'>
        <button className='square' onClick={()=>{change(number[6])}} >{number[6]}</button>
        <button className='square' onClick={()=>{change(number[7])}} >{number[7]}</button>
        <button className='square' onClick={()=>{change(number[8])}} >{number[8]}</button>
        <button className='square' onClick={()=>{operations(number[17], num)}} >{number[17]}</button> 
        </div>
        <div className='four-row'>
        <button className='square' onClick={()=>{change(number[9])}} >{number[9]}</button>
        <button className='square' onClick={()=>{change(number[10])}} >{number[10]}</button>
        <button className='square-equal' onClick={()=>{equal(prevnum, num)}} >{number[11]}</button>
        </div> 
      </div>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board value={5}/>
    {/* <Button value={10}/> */}
    {/* <Square value = {6}/> */}
     {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
