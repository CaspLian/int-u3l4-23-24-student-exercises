// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
  myName.innerHTML = "Caspar Lian";
  myHobby.innerHTML = "I like to code";
  myLocation.innerHTML = "I live in New York";
});


// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('mouseover', function(){
  image.src ="https://i.imgflip.com/4nswke.gif" ;
});



// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('mouseover',function(){
  image.src = "https://img.ifunny.co/images/5344e67f96c706ce92fe5c57063bf08766bd599db0075ff71f6b1273e6792102_1.jpg";
});

// BONUS
// 7. Try using different event types for your buttons.
