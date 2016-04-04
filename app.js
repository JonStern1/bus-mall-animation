console.log('Holo. I need to post the darn images');

var twentyfiveClicks = 0;
var tenClicks = 0;
var timesDisplayed = 0;
var imageObjectArray = [];

function ImageDataConstructor (image, filePath){
  this.image = image;
  this.filePath = filePath;
  this.numberImageAppearance = 0;
  this.numberClicks = 0;
}
ImageDataConstructor.prototype.createImageEl = function(){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('image', this.image);
  imgEl.setAttribute('filePath', this.filePath);
  imgEl.addEventListener('click', eventHandler); this.numberImageAppearance++;
  timesDisplayed++;
  this.numberClicks++;
  return imgEl;

};

var bag = new ImageDataConstructor('bag', 'img/bag.jpg');
var banana = new ImageDataConstructor('banana', 'img/banana.jpg');
var bathroom = new ImageDataConstructor('bathroom', 'img/bathroom.jpg');
var boots = new ImageDataConstructor('boots', 'img/boots.jpg');
var breakfast = new ImageDataConstructor('breakfast', 'img/breakfast.jpg');
var bubblegum = new ImageDataConstructor('bubblegum', 'img/bubblegum.jpg');
var chair = new ImageDataConstructor('chair', 'img/chair.jpg');
var cthulhu = new ImageDataConstructor('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new ImageDataConstructor('dogDuck', 'img/dog-duck.jpg');
var dragon = new ImageDataConstructor('dragon', 'img/dragon.jpg');
var pen = new ImageDataConstructor('pen', 'img/pen.jpg');
var petSweep = new ImageDataConstructor('petSweep', 'img/pet-sweep.jpg');
var scissors = new ImageDataConstructor('scissors', 'img/scissors.jpg');
var shark = new ImageDataConstructor('shark', 'img/shark.jpg');
var sweep = new ImageDataConstructor('sweep', 'img/sweep.png');
var tauntaun = new ImageDataConstructor('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageDataConstructor('unicorn', 'img/unicorn.jpg');
var usb = new ImageDataConstructor('usb', 'img/usb.gif');
var waterCan = new ImageDataConstructor('waterCan', 'img/water-can.jpg');
var wineGlass = new ImageDataConstructor('wineGlass', 'img/wine-glass.jpg');
console.log('Holo. Constructor and variables okay?');

imageObjectArray.push(bag);
imageObjectArray.push(banana);
imageObjectArray.push(bathroom);
imageObjectArray.push(boots);
imageObjectArray.push(breakfast);
imageObjectArray.push(bubblegum);
imageObjectArray.push(chair);
imageObjectArray.push(cthulhu);
imageObjectArray.push(dogDuck);
imageObjectArray.push(dragon);
imageObjectArray.push(pen);
imageObjectArray.push(petSweep);
imageObjectArray.push(scissors);
imageObjectArray.push(shark);
imageObjectArray.push(sweep);
imageObjectArray.push(tauntaun);
imageObjectArray.push(unicorn);
imageObjectArray.push(usb);
imageObjectArray.push(waterCan);
imageObjectArray.push(wineGlass);

function displayImages(){
  var randomImage1 = Math.floor((Math.random() * 19) + 1);
  var randomImage2 = Math.floor((Math.random() * 19) + 1);
  var randomImage3 = Math.floor((Math.random() * 19) + 1);
  var firstImage = document.getElementById('firstRandomImage');
  var secondImage = document.getElementById('secondRandomImage');
  var thirdImage = document.getElementById('thirdRandomImage');
  firstImage.setAttribute('src', imageObjectArray[randomImage1].filePath);
  secondImage.setAttribute('src', imageObjectArray[randomImage2].filePath);
  console.log('make it to here?');
  thirdImage.setAttribute('src', imageObjectArray[randomImage3].filePath);
  //find a way to count the images
}

function setClicker(){
  var imageNumberOne = document.getElementById('firstRandomImage');
  var imageNumberTwo = document.getElementById('secondRandomImage');
  var imageNumberThree = document.getElementById('thirdRandomImage');
  imageNumberOne.addEventListener('click', surveyData);
  imageNumberTwo.addEventListener('click', surveyData);
  imageNumberThree.addEventListener('click', surveyData);
  //find a way to count the clicks
}

displayImages();
