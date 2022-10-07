console.log("Get order 1"); 
console.log("Send order 1 to kitchen"); 
console.log("Wait for food prep..."); 
console.log("Return order to customer 1"); 


const fs = require('fs')
let content
try {
  content = fs.readFileSync('index.txt', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)