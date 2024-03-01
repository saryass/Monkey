// creating a new element for the box :

//STEP1
const newMSG=document.createElement('h2');

//STEP2
newMSG
newMSG.textContent='🍌حەزم لە مۆزە خاڵە'
newMSG.style.color='red'
newMSG.style.fontSize='30px'

//STEP3
// document.getElementById('myBox').append(newMSG);

//Below is adding event listiner:
const myBox= document.getElementById('myBox');
console.log(myBox);

document.addEventListener('keydown', e => {     //IMP NOTE: document.addEventListener() means we add the event listener for the whole HTML, not a specific element!! it is very important to understand ;)
    if(e.key ==='Enter'){
        myBox.style.backgroundColor='black';
        myBox.textContent='🙉';
        document.getElementById('myBox').append(newMSG);   //this is the new HTML ELEMENT <P> that i created above ;)
    }
})

document.addEventListener('keyup', e => {
    if(e.key ==='Enter') {
        myBox.style.backgroundColor='yellowgreen';
        myBox.textContent='🙈';

    }
});