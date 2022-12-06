var marbles = ["marble1.jpg", "marble3.jpg"]

var images = document.getElementsByTagName("img")
let i = 0

let x = setInterval(function () {
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


for(i = 0 ; i<images.length;i++){
    images[i].onmouseover=function(){
        console.log(":over")
        // clearInterval(x)
    }
}