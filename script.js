let a=0;
let tempResult= 0;
const caluclation = (selected) => {
  
   
 const firstInput = +document.getElementById('first-input').value;
 const secondInput = +document.getElementById('second-input').value;
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
      a++;
    }
   }
   if(document.getElementById('result').style.display === 'none') {

      document.getElementById('result').style.display="grid";
      document.getElementById('result').style.flexDirection = "column";
      document.getElementById('result').style.alignItems= "center";
      document.getElementById('result').style.fontSize= "3rem";
      document.getElementById('result').style.justifyContent = 'space-around';
   }
}

const clearInput = ()=> {
   document.getElementById('first-input').value="";
   document.getElementById('second-input').value="";
   document.getElementById('result').style.display="none";
}
