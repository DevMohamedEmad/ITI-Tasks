const fs = require('fs');
const { stringify } = require('querystring');

if (process.argv[2] == 'add') {

    let data = JSON.parse(fs.readFileSync('new.txt', 'utf-8'))
    counter = data.length;
    data.push([counter, process.argv[3], process.argv[4]])
    fs.writeFileSync('new.txt', JSON.stringify(data));
} else if (process.argv[2] == 'list') {
    let data = JSON.parse(fs.readFileSync('new.txt', 'utf-8'))
    console.log(data);

} else if (process.argv[2] == 'edit') {
    let data = JSON.parse(fs.readFileSync('new.txt', 'utf-8'))
    data[parseInt(process.argv[3])] = [process.argv[3], process.argv[4] , process.argv[5]]
    fs.writeFileSync('new.txt', JSON.stringify(data));
} else if(process.argv[2] == 'sum'){
    let data= JSON.parse(fs.readFileSync('new.txt' , 'utf-8'))
    sum =0 ;
    for (let index = 0; index < data.length; index++) {
        sum = sum + parseInt(data[index][2])
    }
    console.log('sum of degres :' , sum)
} else if(process.argv[2] == 'del'){
    let data= JSON.parse(fs.readFileSync('new.txt' , 'utf-8'))
    data.splice(parseInt(process.argv[3]), 1)
    fs.writeFileSync('new.txt', JSON.stringify(data));

}