/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(string){
let num = parseInt(string)
console.log(num) 
// check the read me and see what string is passing through 

if(num < 12 ){
  console.log("Good Morning!")
  return "Good Morning"
  
}else if (num > 17){ 
  // make sure it is in military time ("17:00")
  // parseInt cuts it off at :
  return "Good Evening"
}else{
  return "Good Afternoon"
}


}

function displayMessage(string){
  let greeting = document.getElementById("greeting")
  console.log(greeting)
    greeting.innerText = string
  // has to be innerTEXT look at tests in test folder for what they are trying to pass through
}


function testing(){
  let message = document.getElementById("time").value
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
