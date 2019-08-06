// Your code goes here

// Mouse Over button
const button = document.querySelector('.content-pick .destination .btn');
button.addEventListener('mouseover', (event)=> {
    event.target.style.color = "gray";
    console.log(`this is my mouse!`);

    setTimeout(() => {
        event.target.style.color = "";
    }, 600);
}, false);


//Keydown
// PRESS A KEYBOARD KEY AND THE BODY WILL CHANGE TO GRAY
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
     event.style.background = 'gray';
});

//Wheel
// WHEELS OVER "WELCOME" AND INCREASES THE FONT SIZE

const funBus = document.querySelector('.intro h2');
funBus.addEventListener('wheel', (event)=> {
event.target.style.fontSize = '80px';
console.log('font zoom!')

setTimeout(() => {
    event.target.style.fontSize = "";
}, 600);
}, false);

//DRAG

const funBusBanner = document.querySelector(".intro > img" );

// DRAG THE FUN-BUS INTRO IMAGE TO SCALE IT 150% IN SIZE
funBusBanner.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');

//Focus 
const focus = document.querySelector('.intro');

focus.addEventListener('focus', (event) => {
  event.target.style.background = 'gray';  
  console.log('backgroun gray!')  
});
