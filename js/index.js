// Your code goes here
const button = document.querySelector('.destination .btn');
button.addEventListener('mouseover', (event)=> {
    event.target.style.color = "gray";
    console.log(`this is my mouse!`);

    setTimeout(() => {
        event.target.style.color = "";
    }, 600);
}, false);