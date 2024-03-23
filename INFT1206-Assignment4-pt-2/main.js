//  ***************************************************************
//  Name:   main.js
//  Date:   23 March 2024
//  Auth:   Robert Macklem
//  Desc:   Image gallery js file for MDN exercise
//  ***************************************************************
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
]

const imagesAltText = {
    "images/pic1.jpg" : "Image 1 alternate text.",
    "images/pic2.jpg" : "Image 2 alternate text.",
    "images/pic3.jpg" : "Image 3 alternate text.",
    "images/pic4.jpg" : "Image 4 alternate text.",
    "images/pic5.jpg" : "Image 5 alternate text."
}

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (i = o; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', imagesAltText[images[i]]);
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
