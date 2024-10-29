const fs = require('fs');

// // console.log('First Line');

// // let data = fs.readFileSync('file.txt')

// // console.log(data)

// fs.readFile('file.txt',cb)

// function cb(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file data 1 => '+ data);
//     }
// }

// // fs.readFile('file2.txt',cb2)

// // function cb2(err, data) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log('file data 2 => '+ data);
// //     }
// // }

// // fs.readFile('file3.txt',cb3)

// // function cb3(err, data) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log('file data 3 => '+ data);
// //     }
// // }

// // console.log('Last Line');


// //serial mode call async

// console.log('First Line');

// fs.readFile('file.txt',cb)

// function cb(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file data 1 => ' + data);
//         fs.readFile('file2.txt',cb2)
        
//     }
// }


// function cb2(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file data 2 => ' + data);
//         fs.readFile('file3.txt',cb3)

//     }
// }


// function cb3(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('file data 3 => '+ data);
//     }
// }

// console.log('Last Line');


/**
 * fs.readFile and fs.createReadStream 
 * When we use 
 */
/*-- readFile ---*/
/**
Reads the entire file into memory:
    This method reads the entire file's contents into memory as a buffer or string before making the data available in the callback function.
    Synchronous or asynchronous:
    It can be used synchronously (blocking the execution until the file is read) or asynchronously (using a callback function).
Suitable for small files:
    It's efficient for smaller files that can fit comfortably in memory.
Simpler to use:
    The syntax is straightforward, making it easier to use for simple file reading operations.
 */

/*-- createReadStream --*/
/**
Streams data in chunks:
    This method creates a readable stream, which allows you to read the file in smaller chunks, rather than loading the entire file into memory.
More memory efficient:
    Ideal for large files where loading the entire file into memory would be inefficient or impossible.
    Handles data as it arrives:
   You can process the data as it's being read, making it useful for scenarios like processing large datasets or streaming data to a client.
Piping:
    You can pipe the stream to other streams, enabling efficient data transformations and transfers.
 */


const readStream = fs.createReadStream('file.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('createReadStream');
  console.log(chunk);
});

readStream.on('end', () => {
  console.log('File read complete');
});