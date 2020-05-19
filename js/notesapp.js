'use strict';
var allCats =[];
//contructor function
function CatImg(url, alt, title){
  this.url = url;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.view = 0;
  //this pushed evertying into allCats array
  allCats.push(this);
}
var cat1 = new catImage('img/boxcat', 'box cat', 'box cat');
var cat2 = new catImage(img/chargingCat.jpg,'charging cat', 'charging cat');

//this adds everthing into allcats.push(this)
new CatImage(img/outSideCat.jpg', 'boxcat', 'box cat');
// these parameters align with the parameters in the Catimg function
new CatImage('img/multiTaskingCat.jpg','multi tasking cat', 'multi tasking cat');

// this creates a template for images going into html from the dom in js
//this appends images to html using dom
CatImage.prototype.banana = function(){
//this creates an img in html. only the <img
  var imageElement = document.createElement('img');
  // this creates the rest of the <img in html = <img src url alt title
  imageElement.setAttribute('src',this.filepath);
  imageElement.setAttribute('alt', this.alt);
  imageElement.setAttribute('title',this.title);
  //appendchild to paretn
  parent.appendChild(imageElement);
};

//call it to show up in html this is connected to line 14. CatImage.prototype.appendImage. The appendImage part is named whatever you want(bannanas)
//cat1.bananna();

//helper function to create a random cat pic
function randomNumber(min, max){
    retun Math.floor(Math.random()*(max-min +1))+ min;
}

// min = 0
// max = array.length -1

//call my random number funciton to get a random index position, that willl be my random indes position for my allcats array
// use that object instance to call my banana funciotn
// do this twice
function getRandomCat(){
// i added this after i created  a parent.addEventListener to make sure it gets rid of image tags. This is an empty string.
    parent.textContent = '';
    // these parameters sing up to min max or randomNumber and allCats array
    // the array index starts at 0. if the length is 5 it will go 0-4, thats why we add -1 to length.
    var randomIndex = randomNumber(0,allCats.length -1);
    // this compares another random index
    var secondRandomIndex = randomNumber(0, allCats.Length-1);


    //this compares both randomIndex and secondRandomIndex. This is part of the make sure they dont repeat part.
    while(randomIndex === secondRandomIndex){
        //get another random index
        // this will break out of the loop once the second ramdomIndex is different than the first.
        secondRandomIndex = randomNumber(0, allCats.length -1);
    }

    console.log('this is my random index', randomIndex);


    //this renders using the function we names banana
    //this renders two times since i added allCats[secondRandomIndex].banana
    allCats[randomIndex].banana();
    allCats[randomIndex].views++;


    allCats[secondRandomIndex].banna();
    // this increments the views?
    allCats[secondRandomIndex].views++;



}


getRandomCat();

//basic patterns and underlined strutctures
// read others code 




//Lab bus mall
// 3 poducts on site
// options to vote for each item
// array of results on a table
// every time you click it will be a new set of cat photos will appear
// We need an eventListener for each cat. It will hear a click event and run getRandom function.
// parent listener should be placed in the section. set an id inside the section.
// add a this.votes = 0; into the constructor object
// make a funciton for evenetListener
// uses bubbling to rememeber
// 


// this fugures out which cat was clkicked on
// increment the vvoert on the cat
// call the getRandomCat function to generate the new cats
// figure out which cat object instance we clicked on.
// if i loop through all the object instance and compare the event.target.title with the allCats[i].title and find the matching one.s
function handleClick(){

    console.log('thing we clicked on',event.target.title);
}
//add a var for paranet element id
var parent =  docume.getElementById('catshit')
//parent element is getting and eventlistener and running a function for getRandomCat
// actually write a different function
// function is an anonymous in the paratameter that waits to hear the click
//event.target becomes the thing that was clicked on.
parent.addEventListener('click', function){

    var titleOfCatThatWasClickedOn = even.target.title;

    for(var i=0; i< allCats.Length; i++_){
        if(titleOfCatThatWasClickedOn === allCats[i].title){
            //i found the object instance of the cat that was clkicked on!
            allCats[i].votes++;
        }
    }
    //call getRandomCat to generate new cats
    getRandomCat();
}






// 3 things
// name of prod
// filepath of img
// remove event.listener youll need to google this. its easy.
// we are doing a pull request from our own thing to work from a branch.
// so... work on a branch submit a pull request.



// fork class repo
// clone it
// git clone it to cf
// go to git hub and clone of original
// local version of our forked repo
// git remote add upstream, paste url of original repo
// makes a conect with forked repo and original repo
// git remote -v to check
// git pull upstream master will pull most recent changes from original master repo
// there will be an origin and an upstream now
// origin is our repo and upstream will be the class repo