let http = require('http')
let fs = require('fs')
const { json } = require('stream/consumers')

const server = http.createServer(function (request, response) {

    let urls = request.url.split('/')
    if (urls[1] == 'home') {
        let homePage = fs.readFileSync('home.html', 'utf-8')
        response.write(homePage);
    } else if (urls[1] == 'products') {
        products = JSON.parse(fs.readFileSync('file.json', 'utf-8'))

        if (urls[2]) {
            let index = urls[2] - 1;
            response.write(`${products[index].name}`)
            response.write(`${products[index].price}`)
            response.write(`${products[index].color}`)
        } else {
            response.write(products)
        }
    }
    else {
        response.write("Not Found 404")
    }
    response.end();
})
server.listen(4000, function () {
    console.log('server is ready')
})