// Your code goes here

// Mouse Over button
const button = document.querySelector('.content-pick .destination .btn');
button.addEventListener('mouseover', (event)=> {
    event.target.style.color = "gray";
    // console.log(`this is my mouse!`);

    setTimeout(() => {
        event.target.style.color = "";
    }, 600);
}, false);


//Keydwon 




//Wheel - Class "intro" H2 font size zoom

const funBus = document.querySelector('.intro h2');
funBus.addEventListener('wheel', (event)=> {
event.target.style.fontSize = '80px';
console.log('font zoom!')

setTimeout(() => {
    event.target.style.fontSize = "";
}, 600);
}, false);