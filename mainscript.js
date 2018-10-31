let readMore = document.querySelector('.more');
let moreContent = document.querySelector('.more-content');

let readMoreTwo = document.querySelector('.more-second');
let moreContentTwo = document.querySelector('.more-content-two');


let readMoreThree = document.querySelector('.more-third');
let moreContentThree = document.querySelector('.more-content-three');

let readMoreFour = document.querySelector('.more-fourth');
let moreContentFour = document.querySelector('.more-content-four');

let readMoreFive = document.querySelector('.more-fifth');
let moreContentFive = document.querySelector('.more-content-five');

let readMoreSix = document.querySelector('.more-sixth');
let moreContentSix = document.querySelector('.more-content-six');

let readMoreSeven = document.querySelector('.more-seventh');
let moreContentSeven = document.querySelector('.more-content-seven');

let readMoreEight = document.querySelector('.more-eighth');
let moreContentEight = document.querySelector('.more-content-eight');


function togglers(){
    moreContent.classList.toggle('more-content');
    readMore.classList.toggle('more-content');
 }

 function togglerstwo(){
    moreContentTwo.classList.toggle('more-content-two');
    readMoreTwo.classList.toggle('more-content-two');
 }

 function togglersthree(){
    moreContentThree.classList.toggle('more-content-three');
    readMoreThree.classList.toggle('more-content-three');
 }
 function togglersfour(){
    moreContentFour.classList.toggle('more-content-four');
    readMoreFour.classList.toggle('more-content-four');
 }
 function togglersfive(){
    moreContentFive.classList.toggle('more-content-five');
    readMoreFive.classList.toggle('more-content-five');
 }
 function togglerssix(){
    moreContentSix.classList.toggle('more-content-six');
    readMoreSix.classList.toggle('more-content-six');
 }

 function togglersseven(){
    moreContentSeven.classList.toggle('more-content-seven');
    readMoreSeven.classList.toggle('more-content-seven');
 }
 function togglersseight(){
    moreContentEight.classList.toggle('more-content-eight');
    readMoreEight.classList.toggle('more-content-eight');
 }

 let navTab=document.querySelector('.navigation-tab');

 function clickFunction(){
    navTab.classList.toggle('hide');
 }