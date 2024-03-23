// *******************************************************
//  Name:   Robert Macklem
//  File:   main.js
//  Date:   23 March 2024 
//  Desc:   Silly story generator script for MDN exercise
//  ******************************************************

//CONSTS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//Primarys tory str (big str)
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//Insert strs
//person
const insertX = [
    "Willy the Goblin",
    "Big Daddy", 
    "Father Christmas"
];

//place
const insertY = [
    "the soup kitchen",
    "Disneyland", 
    "the White House"
];

//event
const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk", 
    "turned into a slug and crawled away"
];

//Returns random element from arg
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Adds onclick listener to randomize button
randomize.addEventListener('click', result);

//Result runs on onclick event
function result() {
    //Declare return value (printed in html element, not actually returned)
    let newStory = storyText;

    //Get story items at random
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    //Format story with randmoized items
    newStory = newStory.replaceAll(":insertx:", xItem)
    newStory = newStory.replaceAll(":inserty:", yItem)
    newStory = newStory.replaceAll(":insertz:", zItem)

    //Format story with name input, if given
    if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)
    }

    //Format story with US / UK localization
    if(document.getElementById("uk").checked) {
    const weight = Math.round(lbsToSt(300)) + " stone";
    const temperature =  Math.round(fahrenheitToCentigrade(94)) + " centigrade";

    newStory = newStory.replaceAll("300 pounds", weight)
    newStory = newStory.replaceAll("94 fahrenheit", temperature)
    }

    //Set text in html element and make visible
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

//Pounds to stone
function lbsToSt(lbs) {
    //Math from google
    return lbs * 0.07
}

function fahrenheitToCentigrade(f) {
    //Math from google
    return (f - 32) / 1.8
}
