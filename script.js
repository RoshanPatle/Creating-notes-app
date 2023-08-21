'use strict'

const notescontainer=document.querySelector('.notes-container');
const createbtn=document.querySelector('.btn')
const notes=document.querySelectorAll('.input-box')

  

createbtn.addEventListener('click',()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src='images/delete.png';
    notescontainer.appendChild(inputBox).appendChild(img);
})


notescontainer.addEventListener('click', function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        
    }

 
})
