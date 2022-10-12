let notif=document.querySelector('#notif'),
    input=document.querySelectorAll('input'),
    sendBtn=document.querySelector('.btn-primary'),
    indicator=document.querySelector('#indicator'),
    modalWrapper=document.querySelector('.modal-wrapper'),
    modalText=document.querySelector('#modal-text');


input[0].addEventListener('focus', (e)=>{
  e.target.setAttribute('style','border:3px solid green');
  e.target.setAttribute('placeholder', 'Enter Username');

})
input[0].addEventListener('blur', (e)=>{
  
  if(e.target.value.trim().length===0){
    e.target.value="";
    e.target.setAttribute('style','border:3px solid crimson');
    e.target.setAttribute('placeholder', 'Plice fill input . . .')
  }
})

input[1].addEventListener('focus', (e)=>{
  e.target.setAttribute('style','border:3px solid green');
  e.target.setAttribute('placeholder', 'Enter Password')

})
input[1].addEventListener('blur', (e)=>{
  if(e.target.value.trim().length===0){
    e.target.value="";
    e.target.setAttribute('style','border:3px solid crimson');
    e.target.setAttribute('placeholder', 'Plice fill input . . .')
  }
})

indicator.addEventListener('click',(e)=>
{
  if(input[1].getAttribute('type').toLowerCase()==='password'){
  input[1].setAttribute('type','text');
  indicator.innerHTML=`<i class="bi bi-eye-slash-fill"></i>`
    console.log('alik');
} 
  else{
    input[1].setAttribute('type','password');  
                indicator.innerHTML=` <i class="bi bi-eye-fill"></i>`;
  }
})


sendBtn.addEventListener('click',()=>{
if(input[0].value.trim().length === 0 || input[1].value.trim().length === 0){
 
}
else{
  
  modalWrapper.setAttribute('class','modal-wrapper d-flex');
  setInterval(()=>{
    modalText.innerHTML=``
  }
  )
  setTimeout(function(){
    modalWrapper.setAttribute('class','modal-wrapper slide');
  },5000)
}
})




