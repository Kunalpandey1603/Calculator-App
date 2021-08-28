let tempResult= 0;
let a=0;
const caluclation = (selected) => {
 const firstInput = +document.getElementById('first-input').value;
 console.log('firstInput',firstInput);
 const secondInput = +document.getElementById('second-input').value;
 console.log('secondInput',secondInput);
let result;
 switch(selected){
     case 'add':
        result = firstInput + secondInput;
     break;
     case 'subtract':
        result = firstInput - secondInput;
     break;
     case 'multiply':
        result = firstInput * secondInput;
     break;
     case 'divide':
        result = firstInput / secondInput;
     break;
     case 'percentage':
        result = firstInput % secondInput;
     break;
 }
 if(isNaN(result)) {
   document.getElementById("result").innerText +=''; 
 }
 else {
    if(result === tempResult){
       if (a===0) {
         document.getElementById("result").innerText += 'Answer = ' + result;
         a++;
       }
      else {

      }
  }
    else {
      if (document.getElementById("result").innerText) {
         document.getElementById("result").innerHTML = "";
      }
      document.getElementById("result").innerText += 'Answer = ' + result;
      tempResult=result;
    }
   }
}

const clearInput = ()=> {
   document.getElementById('first-input').value="";
   document.getElementById('second-input').value="";
}
