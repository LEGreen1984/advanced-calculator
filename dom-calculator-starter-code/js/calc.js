// document.addEventListener("DOMcontentLoaded", function(){

var myButton = document.getElementsByClassName('buttonNum')
  console.log(myButton);

function integer(value){
  parseInt(value)
}
function handleClick() {
  console.log(this.innerHTML);
}
for (var i = 0; i < myButton.length; i++) {
myButton[i].addEventListener("click", handleClick)
  if (i == 7){
    parseInt(this.innerHTML)
    console.log(i / 2);
  }


}
// var displayScreen = document.getElement('h2')
//   console.log(displayScreen)

// getElementsByTag













// }
