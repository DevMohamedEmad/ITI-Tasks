countries = ["Egypt" , "Mexico" , "KSA" , "Mexico" , "ARE" , "Japan" ,"Egypt" ]
var x= new Set(countries)
var  count= 0
x.forEach(function(item)
{
    count++;
})
console.log(countries.length - count)