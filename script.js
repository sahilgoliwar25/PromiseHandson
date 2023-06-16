//Q1.
let displayOutput = document.querySelectorAll("span");
function calculate(num1, num2) {
  return num1 * num2;
}

function displayData(name, age) {
  displayOutput[0].innerHTML = `${name} : age is ${age}`;
}

displayData("Jonny", calculate(20, 15));

//Q2.
function callbackHell() {
  setTimeout(() => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
        setTimeout(() => {
          console.log("4");
          setTimeout(() => {
            console.log("5");
            setTimeout(() => {
              console.log("6");
              setTimeout(() => {
                console.log("7");
              }, 7000);
            }, 6000);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
}

//Q3.
function promisePrint() {
  function printNumbersWithDelay(num, delay) {
    let counter = 1;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        console.log(counter);
        counter++;
        if (counter > num) {
          clearInterval(interval);
          resolve();
        }
      }, delay);
    });
  }
  printNumbersWithDelay(7, 1000)
    .then(() => {
      console.log("All done!");
    })
    .catch((error) => {
      console.error(error);
    });
}

//Q4
let variable = true;
// let myPromise = new Promise((res, rej) => {
//   if (variable === true) {
//     res("Promise resolved Successfully...");
//   } else {
//     rej("Promise Rejected!!!");
//   }
// });

// myPromise.then((data) => console.log(data)).catch((err) => console.log(err));

function promiseFunction(p) {
  return new Promise((res, rej) => {
    if (variable === true) {
      res("Promise resolved Successfully...");
    } else {
      rej("Promise Rejected!!!");
    }
  });
}
promiseFunction(variable)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// //prime or not
// let num = 15;
// let count = 0;
// function promiseFun(p) {
//   return new Promise((res, rej) => {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         count++;
//       }
//     }
//     if (count === 0) {
//       res("Number is prime");
//     } else {
//       rej("Number is not prime");
//     }
//   });
// }
// promiseFun(num)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//Q5
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Sahil", callMe);

//Q6
function callbackHell2() {
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
        setTimeout(() => {
          console.log("Step 4");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

//Q7. Example 1
function example1() {
  let value = true;
  function promiseExample(p) {
    return new Promise((resolve, reject) => {
      if (value === true) {
        resolve("Promise Program ran successfully!!!");
      } else {
        reject("Promise Program caught an error!!!");
      }
    });
  }
  promiseExample(value)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
//Q7. Example 2
function example2() {
  let value2 = false;
  function promiseExample2(p) {
    return new Promise((resolve, reject) => {
      if (value2 === true) {
        resolve("Promise Program ran successfully!!!");
      } else {
        reject("Promise Program caught an error!!!");
      }
    });
  }
  promiseExample2(value2)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
//Q8.
function asyncAwait() {
  function delay2Sec() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after 2 seconds!!!");
      }, 2000);
    });
  }

  async function asyncCalling() {
    console.log("calling....");
    const output = await delay2Sec();
    console.log(output);
    // Expected output: "resolved"
  }

  asyncCalling();
}

//Q9.
function promiseAll() {
  function Abc() {
    return new Promise((res, rej) => {
      if (20 % 2 === 0) {
        res("This is Even Number.");
      } else {
        rej("This is Odd Number.");
      }
    });
  }
  const promiseVar = new Promise((res, rej) => {
    if (true) {
      res("Hi EA23 !!!");
    } else {
      rej("Sorry!!!");
    }
  });
  Promise.all([Abc(), promiseVar])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// // practice
// let count = 0;
// setTimeout(() => {
//   console.log(++count);
//   setTimeout(() => {
//     console.log(++count);
//     setTimeout(() => {
//       console.log(++count);
//       setTimeout(() => {
//         console.log(++count);
//         setTimeout(() => {
//           console.log(++count);
//           setTimeout(() => {
//             console.log(++count);
//             setTimeout(() => {
//               console.log(++count);
//             }, 7000);
//           }, 6000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

//----------------------------------------------------------------
// for (let i = 1; i <= 7; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }
