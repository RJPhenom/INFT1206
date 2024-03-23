//  ***************************************************************
//  Name:   main.js
//  Date:   23 March 2024
//  Auth:   Robert Macklem
//  Desc:   Image gallery js file for MDN exercise
//  ***************************************************************

//CONSTS
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
]

/* Declaring the alternative text for each image file */
const imagesAltText = {
    "images/pic1.jpg" : "Image 1 alternate text.",
    "images/pic2.jpg" : "Image 2 alternate text.",
    "images/pic3.jpg" : "Image 3 alternate text.",
    "images/pic4.jpg" : "Image 4 alternate text.",
    "images/pic5.jpg" : "Image 5 alternate text."
}

//FUNCS
//Onclick function
function onThumbnailClick(thumbnail) {
    //Gets the src first
    const src = thumbnail.getAttribute('src')

    //Sets for displayedImage
    displayedImage.setAttribute('src', src);
    displayedImage.setAttribute('alt', imagesAltText[src])
}

/* Wiring up the Darken/Lighten button */
function changeButtonShade(button) {
    //If button is dark, lighten
    if (button.getAttribute('class') == 'dark') {
        button.setAttribute('class', "light");
        button.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }

    //Else, darken
    else {
        button.setAttribute('class', "dark");
        button.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}


//SCRIPT
/* Looping through images */
for (i = o; i < images.length; i++) {
    //Create img html obj
    const newImage = document.createElement('img');

    //Set attributes
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', imagesAltText[images[i]]);

    //Append to div
    thumbBar.appendChild(newImage);

    //Add listener
    newImage.addEventListener('click', onThumbnailClick(newImage));
}

//Add the button listener
button.addEventListener('click', changeButtonShade(button));