//  let rs = fs.createReadStream('file.txt')
 
// rs.on('data',(chunk) => {
//    console.log(chunk)
// })

// rs.on('end', () => {
//     console.log('end')
// })


//pipes

// rs.pipe()
//redableSourse

const { pipeline } = require('stream');
const fs = require('fs');

const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

readStream.on('error', (err) => {
  console.error('Read stream error:', err);
});

writeStream.on('error', (err) => {
  console.error('Write stream error:', err);
});

pipeline(
  fs.createReadStream('file.txt'),
  fs.createWriteStream('destination.txt'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);

pipelise(
  fs.createReadStream,
  fs.createWriteStream,
  (err) => {
    if(err) {

    } else {

    }
  }
)

fs.createReadStream.pipe(fs.createWriteStream)

fs.createReadStream.on('error', err => {

})

fs.createWriteStream.on('error', err => {
  
})