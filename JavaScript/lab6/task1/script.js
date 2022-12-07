function Box (_width , _height ,_books){
this.width  = _width
this.height = _height
this.books  = _books
this.valueOf = function(){
    c = 0
    for(i=0 ;i<_books.length;i++){
      c += _books[i]["numPages"]
    }
    return c;
}
}

function Book (_id , _name , _writerName , _numPages){
    this.id = _id
    this.name= _name  
    this.writerName= _writerName  
    this.numPages= _numPages    
}
bookOne   = new Book(1 , "Java Fundamentels" , " Mark" , 150)
bookTwo   = new Book(2 , "HTml Fundamentels" , " Prof" , 120)
bookThree = new Book(3 , "PHP5 Fundamentels" , "Cesar" , 170)

boxOne = new Box("100" , "150" ,[bookOne,bookTwo , bookThree])
console.log(boxOne.valueOf())