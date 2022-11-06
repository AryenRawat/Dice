var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;

var x1 = "images/dice" + n1 + ".png";
var x2= "images/dice" +n2+".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];


img1.setAttribute("src", x1);
img2.setAttribute("src", x2);

if(n1>n2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}else if(n2>n1){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}