var str = prompt("Enter The Word")
x = 0;
y = 0;


for(i =0 ; i<str.length ; i++){
   if(str.charAt(0) == str.charAt(i)){
     x +=1;
   }else {
    y+=1
   }
}
( y == 2*x)? console.log("yes"):console.log("no")