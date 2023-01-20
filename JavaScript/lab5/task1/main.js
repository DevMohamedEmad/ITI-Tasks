function save (){
    var email = document.getElementsByName("email")[0]
    var password = document.getElementsByName("password")[0]
    if (email.value.length > 3 && password.value.length >3){
        window.localStorage.setItem("email" , email.value) 
        window.localStorage.setItem("password" , password.value) 
        window.sessionStorage.setItem("email" ,email.value)
        window.sessionStorage.setItem("password" ,password.value)
        
    }
}

function remove(){

    window.sessionStorage.removeItem("email")
}
