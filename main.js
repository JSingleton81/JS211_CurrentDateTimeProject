// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// const { string } = require("stylelint/lib/formatters");


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num2String = (number) => {
  console.log()
  return number.toString()
 
}



// Write a JavaScript program to convert a string to the number.
const string2Number =(string) => {
  console.log()
  return parseInt(string)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const checkDataType = (dataEntered) => {
  return typeof dataEntered;
}
  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}
const addTwoNumbersDom = () =>{
  let num1= document.getElementById("num1").value
  let num2= document.getElementById("num2").value
  console.log(2, num1, 3, num2)
  let num3= parseInt(num1) + parseInt(num2)
  document.getElementById("add-two-numbers").innerHTML = num3
}

// Write a JavaScript program that runs only when 2 things are true.
const twoTruths = (a, b) => {
  if (a && b){
    return true
  }

}

const twoTruthsDom = () =>{
  let a= document.getElementById('a').value
  let b= document.getElementById('b').value
  // console.log(a, b)
  if ( a && b){
    document.getElementById("two-true-things").innerHTML = true 
  }

}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneRight = (a, b) => {
  if (a || b){
    return "one of them are true"
  }
}
const oneRightDom =() => {


  let c= document.getElementById('c').value
  let d= document.getElementById('d').value

  if ( c || d){
    document.getElementById("one-true-thing").innerHTML = "one of them are true"
  }
} 
// Write a JavaScript program that runs when both things are not true.  
const twoFalse = (a, b) => {
  if (!a && !b) {
    return false
  } else {
    return "one is wrong"
  }
}

const twoFalseDom = () => {
  let e= document.getElementById('e').value
  let f= document.getElementById('f').value
  // console.log(e, f)
  if ( !e && !f){
    document.getElementById("both-not-true").innerHTML = "one is wrong"
  }
}
// console.log(twoFalse(false, false))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24



