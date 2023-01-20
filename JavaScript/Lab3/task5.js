let parentwindow = window.open('', "parent window", "_blank")
parentwindow.document.write("Typing Message")

    setInterval(function(){
        parentwindow.close()
    } , 2000)

