// *******************************************************
//  Name:   main.js
//  Date:   3/23/2024  
//  Auth:   Robert Macklem
//  Desc:   Silly story generator script for MDN exercise
//  ******************************************************

//CONSTS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//VARS
//Primarys tory str (big str)
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//Insert strs
//person
let insertX = [
    "Willy the Goblin",
    "Big Daddy", 
    "Father Christmas"
];

//place
let insertY = [
    "the soup kitchen",
    "Disneyland", 
    "the White House"
];

//event
let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk", 
    "turned into a slug and crawled away"
];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem)
    newStory = newStory.replace(":inserty:", yItem)
    newStory = newStory.replace(":insertz:", zItem)

    if(customName.value !== '') {
    const name = customName.value;

    }

    if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

    }

    story.textContent = ;
    story.style.visibility = 'visible';
}
