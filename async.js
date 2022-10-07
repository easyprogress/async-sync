console.log("Get order 1"); 
console.log("Send order 1 to kitchen"); 
setTimeout(() => { 
  console.log("Wait for food prep..."); 
}, 2000); 
console.log("Return order to customer 1");


const fs = require('fs')

console.log('start reading a file...')

fs.readFile('file1.txt', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})

console.log('end of the file')