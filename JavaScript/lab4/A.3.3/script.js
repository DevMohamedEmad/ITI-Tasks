var marbles = ["marble1.jpg", "marble3.jpg"]

var div = document.getElementsByTagName("div")[0]
var images = document.getElementsByTagName("img")
let i = 0
var y = -2;


div.onmouseleave=function(){
     y = setInterval(function () {
        if (i < images.length) {
            images[i].src = "marble3.jpg"
            if(i != 0){
                images[i-1].src = "marble1.jpg"
            }
            if(i == 0){
                images[images.length-1].src = "marble1.jpg"
            }
            if(i == images.length-1){
                i=0
            }else{
                i=i+1
            }
        }
    }, 500)
}
div.onmouseover=function(){
    clearInterval(x)
    if(y != -2){
        clearInterval(y)
    }
}

     x = setInterval(function () {
        if (i < images.length) {
            images[i].src = "marble3.jpg"
            if(i != 0){
                images[i-1].src = "marble1.jpg"
            }
            if(i == 0){
                images[images.length-1].src = "marble1.jpg"
            }
            if(i == images.length-1){
                i=0
            }else{
                i=i+1
            }
        }
    }, 500)