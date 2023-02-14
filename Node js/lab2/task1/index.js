const fs = require('fs');
const http=require('http'); // import 

const server = http.createServer(function (request , response){
let urls = request.url.split('/');
    if(urls[1] == 'show'){
        let data = JSON.stringify(fs.readFileSync('file.json', 'utf-8'))
        console.log(data)
    }
    response.end()

});
server.listen(8000 , function(){
    console.log('hi server listen on port 8000')
})
