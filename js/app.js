('use strict');
var parent = document.getElementById('cat1');
var allProducts = [];
var rounds = 25;
var zero = 0;
function Products(filePath, alt, title){
  this.filePath = filePath;
  this.alt = alt;
  this.title = title;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);

}

new Products('img/bag.jpg', 'bag','bag');
new Products('img/banana.jpg', 'banana', 'banana');
new Products('img/bathroom.jpg', 'bathroom', 'bathroom');
new Products('img/boots.jpg', 'boots', 'boots');
new Products('img/breakfast.jpg', 'breakfast', 'breakfast');
new Products('img/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Products('img/chair.jpg', 'chair', 'chair');
new Products('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Products('img/dog-duck.jpg', 'dog-duck', 'dog-duck');
new Products('img/dragon.jpg', 'dragon', 'dragon');
new Products('img/pen.jpg', 'pen', 'pen');
new Products('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new Products('img/scissors.jpg', 'scissors', 'scissors');
new Products('img/shark.jpg', 'shark', 'shark');
new Products('img/sweep.png', 'sweep', 'sweep');
new Products('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Products('img/unicorn.jpg', 'unicorn', 'unicorn');
new Products('img/usb.jpg', 'usb', 'usb');
new Products('img/water-can.jpg', 'water-can', 'water-can');
new Products('img/wine-glass.jpg', 'wine-glass', 'wine-glass');

// RENDER
Products.prototype.banana = function(){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', this.filePath);
  imageElement.setAttribute('alt', this.title);
  imageElement.setAttribute('title', this.title);

  parent.appendChild(imageElement);
  this.views++;
};

Products.prototype.results = function(){
  var elementP= document.createElement('p');
  elementP.textContent= `${this.title} had ${this.votes} votes and ${this.views} views.`;
  parent.appendChild(elementP);
};
//helper function
function randomNumber(max){
  // if I dont add 1 I can't get a 10
  return Math.floor(Math.random() * max);
}

// this will render an array of images to the dom
//GET RANDOM PRODUCT
function getRandomProduct(){
  parent.textContent = '';

  // call these to get random number on index positio
  var randomIndex = randomNumber(allProducts.length);
  var randomIndex2 = randomNumber(allProducts.length);
  var randomIndex3 = randomNumber(allProducts.length);

  while(randomIndex === randomIndex2 || randomIndex === randomIndex3 || randomIndex2 === randomIndex3){
    randomIndex2 = randomNumber(allProducts.length);
    randomIndex3 = randomNumber(allProducts.length);

  }
  //BANANA FUNCTION
  allProducts[randomIndex].banana();
  allProducts[randomIndex2].banana();
  allProducts[randomIndex3].banana();

}


getRandomProduct();


parent.addEventListener('click', function poop(){
  var clickedProducts = event.target.title;
  if(zero < rounds ){
    for(var i= 0; i < allProducts.length; i++){
      if(clickedProducts === allProducts[i].title){
        allProducts[i].votes++;
        console.log (zero);
      }
    }
    zero++;
    getRandomProduct();
  } else{
    this.removeEventListener('click', poop);
    for( var j= 0 ; j < allProducts.length; j++){
      allProducts[j].results();
    }
  }



});

