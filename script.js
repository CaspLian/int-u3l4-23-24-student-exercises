let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?/
//It changes the HTML of the selected element//
// - What do you think .src does?
//I think it changes the source of the image in the HTML//

// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "Caspar Lian";
    img.src = "https://img.ifunny.co/images/5344e67f96c706ce92fe5c57063bf08766bd599db0075ff71f6b1273e6792102_1.jpg";
});


