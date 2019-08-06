// Your code goes here





// Mouse Over button
const button = document.querySelector('.btn');
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
     event.target.style.background = 'gray';
     console.log('body changed to gray!');
});

//Keyup
const bodyBack = document.querySelector('body');
bodyBack.addEventListener('keyup', (event) => {
     event.target.style.background = "";
     console.log('body changed back!');
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


// DRAG THE FUN-BUS INTRO IMAGE TO INCREASE THE HEIGHT TO 400PX
const funBusImg = document.querySelector(".intro img" );
funBusImg.addEventListener('drag', (event) => event.target.style.height = '400px');



// Load

window.addEventListener("load", (event) => {
    alert("You're about to enter an active web page that has unique changes");
  });


//Focus



//RESIZE
window.addEventListener('resize', () => alert("YOU'RE MAKING THE PAGE SIZE CHANGE !!!!")) 

//Scroll




//Select



//dbclick
// ADD A NEW COLOR TO NAV LINKS IF THEY ARE DBLCLICKED
const navTag = document.querySelector(".nav");
navTag.addEventListener("dblclick", (event) => {
  event.target.style.color = 'gray';
});



