 var paragraph=document.getElementsByTagName("h3")[0];
// var fontFamily;
// for(var i=0;i<fontFamily.;i++)
// {
//     if(fontFamily[i].checked)
//     fontFamily=gender[i].value    
// }
// var fontFamily = document.getElementsByName(fontFamily)[0]
// console.log()

var btns = document.getElementsByTagName("input")

for(let i=0;i<btns.length;i++){
btns[i].onclick=function(){
    if(btns[i].name == "textAlign"){
      paragraph.style.textAlign=btns[i].value
    }
    if(btns[i].name == "fontFamily"){
      paragraph.style.fontFamily=btns[i].value
    }
    if(btns[i].name == "lineHeight"){
      paragraph.style.lineHeight=btns[i].value
    }
    if(btns[i].name == "TextDecoration"){
      paragraph.style.textDecoration=btns[i].value
    }
    if(btns[i].name == "letterSpacing"){
      paragraph.style.letterSpacing=btns[i].value
    }
}

}
