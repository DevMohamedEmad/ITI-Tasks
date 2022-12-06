images = ["gallary/background.jpg" , "gallary/background2.jpg" , "gallary/background3.jpg" ,"gallary/backround4.jpg" , "gallary/home.png" , "gallary/lap.jpeg" , "gallary/photo.jpg" , "gallary/rptgtpxd-1396254731.webp"]
myImg = document.getElementsByTagName("img")[0]
nextBtn = document.getElementById("next")
stopBtn = document.getElementById("stop")
slideshowBtn = document.getElementById("slideshow")
previousBtn = document.getElementById("previous")
var x;
var i=0;

// slideshow btn
slideshowBtn.onclick=function(){
     x = setInterval(function()
    {
        myImg.src=images[i];
        myImg.alt=images[i];
        if(i==images.length-1){
            i=0
        }else{
            i+=1
        } 
        console.log(i)
    },2000)
}
// stop slide show
stopBtn.onclick=function(){
   clearInterval(x)
}

nextBtn.onclick=function(){
    let index = images.indexOf(`${myImg.alt}`);
    console.log(index)
    if(index==images.length - 1){
        myImg.src=images[0];
        myImg.alt=images[0];
    }else {
        myImg.src=images[index+1];
        myImg.alt=images[index+1];
    }
}

previousBtn.onclick=function(){
    let index = images.indexOf(`${myImg.alt}`); //index of the image
    if(index==0){
        myImg.src=images[images.length-1];
        myImg.alt=images[images.length-1];
    }else {
        myImg.src=images[index-1];
        myImg.alt=images[index-1];
    }
}