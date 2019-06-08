window.onload = () => {

const sendBtn = document.querySelector('.formDate button');
const inpCheck = document.querySelectorAll('input[name="name"], input[name="phone"]');


inpCheck.forEach(e => {
    e.addEventListener('input', function(elem) {
      let emptyInput = false;
        
        inpCheck.forEach(function(elem) {
        if(!elem.value.length) {
               emptyInput = true;      
       } 
        sendBtn.disabled = emptyInput;
     });
   })
})
    
const forma = document.querySelector('.reg-form');
const paragraph = document.createElement('div');
paragraph.className = 'userData';
forma.appendChild(paragraph);

function sendMessage(event) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', (e) => {
            console.log(xhr.status);
  });
  xhr.open('POST', '/u/aholkin/Zrenie/res.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
   
  const jsonArr = {};    
  const formData = new FormData(forma); 
    for (let [key, value] of formData) {
        jsonArr[key] = value;
        console.log(key + ': ' + value);
    }
        
  const jsonMass = JSON.stringify(formData); 
    
  event.preventDefault();
    
  paragraph.innerHTML = `Данные на имя: <span>${jsonArr.name}</span> и телефон: <span>${jsonArr.phone}</span> получены`;
    
  xhr.send(jsonMass);
       
}
    
sendBtn.addEventListener('click', sendMessage);
    
}