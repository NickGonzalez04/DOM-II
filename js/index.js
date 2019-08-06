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
// WHEELS OVER BODY AND INCREASES THE FONT SIZE THROUGHT THE PAGE

const funBus = document.querySelector('body');
funBus.addEventListener('wheel', (event)=> {
event.target.style.fontSize = '25px';
console.log('font zoom!')

setTimeout(() => {
    event.target.style.fontSize = "";
}, 700);
}, false);

//DRAG

const funBusBanner = document.querySelector(".intro img" );

// DRAG THE FUN-BUS INTRO IMAGE TO INCREASE THE HEIGHT TO 400PX
funBusBanner.addEventListener('drag', (event) => event.target.style.height = '400px');

//Focus 
const focus = document.querySelector('.intro > img');

focus.addEventListener('focus', (event) => {
  event.target.style.background = 'gray';  
  console.log('background gray!')  
});






//dbclick
const navItems = document.querySelector('.nav-link');
navItems.addEventListener('dbclick', (event) =>{
        event.target.style.color = 'blue';
        console.log('changed the nav links color!')
});

