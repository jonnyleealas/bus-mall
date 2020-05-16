('use strict');


var parent = document.getElementById('cat1');
var allProducts = [];
var rounds = 25;
var zero = 0;


function Products(name, extension, votes, views){
  this.filePath = `img/${name}${extension}`;
  this.alt = name;
  this.title = name;
  this.votes = votes;
  this.views = views;
  allProducts.push(this);
}


if(localStorage.getItem('joeRogan')=== null){

  new Products('bag','.jpg', 0,0);
  new Products('banana','.jpg',0,0);
  new Products('bathroom','.jpg',0,0);
  new Products('boots','.jpg',0,0);
  new Products('breakfast','.jpg',0,0);
  new Products('bubblegum','.jpg',0,0);
  new Products('chair','.jpg',0,0);
  new Products('cthulhu','.jpg',0,0);
  new Products('dog-duck','.jpg',0,0);
  new Products('dragon','.jpg',0,0);
  new Products('pen','.jpg',0,0);
  new Products('pet-sweep','.jpg',0,0);
  new Products('scissors','.jpg',0,0);
  new Products('shark','.jpg',0,0);
  new Products('sweep','.png',0,0);
  new Products('tauntaun','.jpg',0,0);
  new Products('unicorn','.jpg',0,0);
  new Products('usb','.jpg',0,0);
  new Products('water-can','.jpg',0,0);
  new Products('wine-glass','.jpg',0,0);
} else {

  var localStorageItems = localStorage.getItem('joeRogan');
  var productsLocalStorageArray = JSON.parse(localStorageItems);
  for( var i = 0; i < productsLocalStorageArray.length ; i++){
    new Products(productsLocalStorageArray[i].title,
      // productsLocalStorageArray[i].names,
      productsLocalStorageArray[i].filePath.slice(productsLocalStorageArray[i].filePath.length-4),
      productsLocalStorageArray[i].votes,
      productsLocalStorageArray[i].views);
  }
}





// RENDER
// this puts it in html by creating the template
Products.prototype.banana = function(){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', this.filePath);
  imageElement.setAttribute('alt', this.title);
  imageElement.setAttribute('title', this.title);

  parent.appendChild(imageElement);
  this.views++;
};


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
parent.addEventListener('click', function arrayX(){
  var clickedProducts = event.target.title;
  if(zero < rounds ){
    for(var i= 0; i < allProducts.length; i++){
      if(clickedProducts === allProducts[i].title){
        allProducts[i].votes++;
        console.log (zero);
        // save our allPoducts array in local storage. leaving it here catches each vote
      }
    }
    zero++;
    getRandomProduct();
  } else{
    //this removes eventListener once the 25 times have looped.
    this.removeEventListener('click', arrayX);
    for( var j= 0 ; j < allProducts.length; j++){
      // allProducts[j].results();
    }
    myNamesArray();
    generateChart();
  }

  localStorage.setItem('joeRogan', JSON.stringify(allProducts));
});
// I made this to see if i can render the results in the table.
// parentElemnt.addEventListener('click',arrayX);


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
