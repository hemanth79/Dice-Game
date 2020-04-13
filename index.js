var numberRandom1 =Math.floor( Math.random() * 6)+1;

var randomImage = "dice" + numberRandom1 + ".png";

var imageRandomToGet = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageRandomToGet);



var numberRandom2 = Math.floor(Math.random() * 6)+1;

var randomImage1 = "dice" + numberRandom2 + ".png";

var imageRandomToGet1 = "images/" +randomImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageRandomToGet1);


if(numberRandom1 > numberRandom2){
  document.querySelector("h1").innerHTML = "😎Player 1 wins";
}
else if (numberRandom1 == numberRandom2) {
  document.querySelector("h1").innerHTML = "😉Draw!";

}
else{
  document.querySelector("h1").innerHTML = "😎Player 2 wins";
}
