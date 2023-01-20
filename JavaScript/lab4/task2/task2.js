var image = document.createElement("img")
image.setAttribute("src" , "iti-logo.png")
var myDiv = document.getElementsByTagName("div")[0]
var myP = document.getElementsByTagName("p")[0]
myDiv.appendChild(image)
// myDiv.insertBefore(image , myP)


/*
           The Differenece Between  appendChild() and insertBefore() 
           *********************************************************
- appendChild(para1) require the element will appended and add it at the end of the parent
- insertBefore(para1 , para2) require two parameter
  para1 : the element will added inside the parent before para 2

*/

//  alert(myDiv.childNodes.length)
 
 /* 
 Number Of The Nodes is 4
 childNodes returns nodes: Element nodes, text nodes, and comment nodes.
Whitespace between elements are also text nodes.
 */

myDiv.removeChild(image);
// console.log(myDiv.childNodes.length)