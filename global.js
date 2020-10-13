//Global object
//console.log(global);
setTimeout(() => {
  console.log(
    "after 3 seconds this of execution of global object this message is displayed"
  );
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("interval of 1ms");
}, 1000);

console.log(__dirname); //to get current directory
console.log(__filename); //to get current file

// console.log(document.querySelector);
