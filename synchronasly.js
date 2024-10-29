const fs = require('fs');

console.log('First Line');

let data = fs.readFileSync('file.txt')

console.log('file data => '+ data);

console.log('Last Line');

fs.readFile('file.txt',cb)

function cb(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('file data 2 => '+ data);
    }
}