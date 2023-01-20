var userApi=new XMLHttpRequest();
userApi.open('GET',"https://jsonplaceholder.typicode.com/todos ");
userApi.send();
userApi.onreadystatechange=function()
{
    if(userApi.readyState==4&&userApi.status==200)
    {
        var users=JSON.parse(userApi.responseText)
       for(var i=0;i<users.length;i++)
       {if(users[i]["completed"]==true){
           document.getElementById('myDiv').innerHTML+=`<div class="card">
           <h3>${users[i].id}</h3>
           <p>${users[i].title} $</p>
         </div>`
       }
       }
    }
}
