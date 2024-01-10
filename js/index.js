//~ Html elements
var rgbSyntaxEl=document.getElementById('rgbSyntax');
var easyBtnEl=document.getElementById('easyBtn');
var hardBtnEl=document.getElementById('hardBtn');
var getColorsBtnEl=document.getElementById('getColorsBtn');
var colorsContainerEl=document.getElementById('colorsContainer');
//!App variables
var correctAnswer;
var levels={
  easy:{
    name:"easy",
    numberOfCards:3,
    try:1
  },
  hard:{
    name:"hard",
    numberOfCards:6,
    try:3
  },
}
var selectedLevel="easy";
//^functions
function generateRandomColor(){
  var red =Math.trunc(Math.random()*256);
  var green=Math.trunc(Math.random()*256);
  var blue=Math.trunc(Math.random()*256);
  var color=`rgb(${red}, ${green}, ${blue})`;
// rgbSyntaxEl.innerHTML=color;
rgbSyntaxEl.style.background=color; 
return color; 
}



//^Generate cards according to level
//!Easy => 3
//~ Hard =>6
function askQuestion(level){
// add event to each card
var numberCards=levels[level].numberOfCards;
var colors=[];
for (var i=0; i<numberCards; i++){
colors.push(generateRandomColor());
}
 correctAnswer=colors[Math.trunc(Math.random()*colors.length)];
rgbSyntaxEl.innerHTML=correctAnswer;
displayCards(colors);
}
function displayCards(colorArr){
  var colorCardsHTML ="";
for (var i=0;i<colorArr.length;i++){
colorCardsHTML+=`
<div class="color-card col-md-4">
<div class="inner h-100 rounded " style="background-color:${colorArr[i]}"></div>
</div>
`
}
colorsContainerEl.innerHTML=`
<div class="row g-4 py-4">
${colorCardsHTML}
</div>
`;
var allCards=document.querySelectorAll(".color-card");
 for(var i=0;i<allCards.length;i++){
 allCards[i].onclick= checkAnswer;
 }
 }
  function checkAnswer(event){
   if (event.target.style.backgroundColor === correctAnswer){
alert('congratulation');
askQuestion(selectedLevel);
   }else{
alert('Try again');
event.target.style.display="none";
   }

 } 
askQuestion(selectedLevel);

easyBtnEl.onclick=function(){
  selectedLevel="easy";
  askQuestion(selectedLevel);
  hardBtnEl.classList.remove("active");
  easyBtnEl.classList.add("active");
}

hardBtnEl.onclick=function(){
 selectedLevel ="hard"; 
 askQuestion(selectedLevel);
 easyBtnEl.classList.remove("active");
hardBtnEl.classList.add("active");
}
getColorsBtnEl.onclick=function(){
  askQuestion(selectedLevel);
}