('use strict');

var parent = document.getElementById('cat1');
var allProducts = [];
var rounds = 25;
var zero = 0;
var totalVotes = 0;


function Products(name, extension){
  this.filePath = `/img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);

}

// function getTotals(){
//   var data = localStorage.getItem('votes');

// //   if(data === null){
// //     totalVotes = 0;

// //   } else {
// //     var totalData = JSON.parse(data);
// //     totalVotes = totalData;
// //   }
// //   console.log(getTotals);
// // }
// // getTotals();
// // console.log(getTotals);

new Products('bag','.jpg');
new Products('banana','.jpg');
new Products('bathroom','.jpg');
new Products('boots','.jpg');
new Products('breakfast','.jpg');
new Products('bubblegum','.jpg');
new Products('chair','.jpg');
new Products('cthulhu','.jpg');
new Products('dog-duck','.jpg');
new Products('dragon','.jpg');
new Products('pen','.jpg');
new Products('pet-sweep','.jpg');
new Products('scissors','.jpg');
new Products('shark','.jpg');
new Products('sweep','.png');
new Products('tauntaun','.jpg');
new Products('unicorn','.jpg');
new Products('usb','.jpg');
new Products('water-can','.jpg');
new Products('wine-glass','.jpg');




//this makes my constructor into a string
localStorage.setItem('bitch', JSON.stringify(allProducts));
var testParse = JSON.parse(localStorage.getItem('bitch'));
console.log(testParse);


// //name view votes
// for( var i=0 ; i < testParse.legnth; i++){




// var test = JSON.stringify(allProducts);
// //                    (key name , value) variable var test = JSON.stringify(allProducs);
// localStorage.setItem('fuckface', test);

// var testParse = JSON.parse(localStorage.getItem('test'));
// console.log(test);
// console.log(testParse);
// RENDER
Products.prototype.banana = function(){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', this.filePath);
  imageElement.setAttribute('alt', this.title);
  imageElement.setAttribute('title', this.title);

  parent.appendChild(imageElement);
  this.views++;
};

// Products.prototype.results = function(){
//   var elementP= document.createElement('p');
//   elementP.textContent= `${this.title} had ${this.votes} votes and ${this.views} views`;
//   parent.appendChild(elementP);
// };
//helper function
function randomNumber(max){
  // if I dont add 1 I can't get a 10
  return Math.floor(Math.random() * max);
}

// this will render an array of images to the dom
//GET RANDOM PRODUCT
function getRandomProduct(){
  parent.textContent = '';

  // call these to get random number on index positioadd
  var randomIndex = randomNumber(allProducts.length);
  var randomIndex2 = randomNumber(allProducts.length);
  var randomIndex3 = randomNumber(allProducts.length);

  while(randomIndex === randomIndex2 || randomIndex === randomIndex3 || randomIndex2 === randomIndex3){
    randomIndex2 = randomNumber(allProducts.length);
    randomIndex3 = randomNumber(allProducts.length);

  }
 
  allProducts[randomIndex].banana();
  allProducts[randomIndex2].banana();
  allProducts[randomIndex3].banana();

}


getRandomProduct();

//this checks for clicks and targets title. Also adds numbers into votes.
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
    //this removes eventListener once the 25 times have looped.
    this.removeEventListener('click', poop);
    for( var j= 0 ; j < allProducts.length; j++){
      // allProducts[j].results();

    }
    myNamesArray();
    generateChart();
  }
});
// I made this to see if i can render the results in the table.
// parentElemnt.addEventListener('click',poop);


//chartjs
var names = [];
var votes = [];
var views = [];

function myNamesArray(){
  for(var i = 0; i < allProducts.length; i++){
    // allProducts[i].title;
    names.push(allProducts[i].title);
    votes.push(allProducts[i].votes);
    views.push(allProducts[i].views);

  }
}

function generateChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
