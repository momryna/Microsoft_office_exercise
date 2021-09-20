let counter =document.querySelector(".counter");
let btnButton= document.querySelector(".btnButton");
let inputBox = document.querySelector(".inputBox");
let typingBox = document.querySelector(".typingBox");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");
let index=0;
let errorCounter=0;
//------------------------------------------------------
let timer=0;
let interval =null;
let countDown=()=> {
    if(timer<60){
        timer++;
        counter.innerHTML=timer;
    }else{
        counter.innerHTML="Time's up!";
    }
}
btnButton.addEventListener('click', ()=>{interval= setInterval(countDown, 100)
    ;})
//-------------------------------------------------------
inputBox.value="lsltjhs lsjw kfwie keryu lsdkjfworo";
//Matching Text
typingBox.addEventListener('input', e=>{
    let userValue= typingBox.value .split('');
    let randomText=typingBox.querySelectorAll('span');
    if(e.inputType==='deleteContentBackward'){
        index--;
        randomText[index].classList.remove('correct');
        randomText[index].classList.remove('incorrect');
    }
    else if(userValue[index]===randomText[index].innerText){
        randomText[index].classList.add('correct');
        index++;
    }
    else{
        randomText[index].classList.add('incorrect');
        index++;
        errorCounter++;
    }
})

// typingBox.addEventListener("input" , e =>{
//     let userValue = typingBox.value.split("");
//     console.log(userValue);
//     let randomText = typingBox.querySelectorAll("span");

//     //if user key will be equal to `backspace` so
// if(e.inputType === "deleteContentBackward"){
//     index--;
//     randomText[index].classList.remove("correct");
//     randomText[index].classList.remove("incorrect");
// }
// //if user Key Matched So
// else if(userValue[index] === randomText[index].innerText){
//     randomText[index].classList.add("correct");
//     index++;
// }
// // if user key not matched so
// else
// {
//     {
//     randomText[index].classList.add("incorrect");
//     index++;
//     errorCounter++;
// }
// }
// });