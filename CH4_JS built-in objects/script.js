//Literal creation
var myStr ="hello world from java script"

//constructor
var newStr = new String("hello world");

var str = String("hello world")

console.log(typeof myStr)
console.log(typeof newStr)
console.log(typeof str)


//Length
console.log( myStr.length)                       //11

//index by num
console.log( myStr.charAt(10))                   //d
console.log( myStr.charAt(myStr.length-1))       //d

//index of specifi char
console.log( myStr.indexOf("o"))                  //4
console.log( myStr.indexOf("ld"))                 //9
console.log( myStr.lastIndexOf("l"))              //9

//cut part of string
console.log(myStr.substring(6,11))                 //world

//convert string into array
console.log(myStr.split(" "))
console.log(myStr.split(""))
console.log("Game Over")
//---------------------------------Arrays------------------
var myArray=['1' , 2 ,'ahmed','sara',['good','ver good'],,'10']

console.log(myArray.length);
console.log(myArray[4][1]);