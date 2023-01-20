document.write("<a href=# id = link > Create - Window </a> <br>")
document.getElementById("link").addEventListener("click",createParent)
document.write("<a href=# id = link2 > Close - Window </a>")
document.getElementById("link2").addEventListener("click",closeParent)

function createParent (){
    setTimeout(function(){
        let parent = window.open('' , " Parent" , "_blank")        
        let p1="Mohamed Emad"
        let p2="Backend Developer"
        let p3="ITI"
        i = 0
        p = p1
        let x = setInterval(function(){
            letter = p.charAt(i)
            parent.document.write(`${letter}`)
            i+=1;
            if(p == p3 && i == p.length){
                clearInterval(x)
            }
            if(i == p.length){
                (p == p1)?p=p2:p=p3;
                i = 0
                parent.document.write("<br>");
            }
        } , 1000)
        
    },3000)
}

// function closeParent(){
//     window.close()
// }

