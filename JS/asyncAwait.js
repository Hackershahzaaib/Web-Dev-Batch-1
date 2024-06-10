// Async Function
// Async and Await in JavaScript are keywords used to handle asynchronous operations with promises.
// The Async function simply allows us to write promises-based code as if it were synchronous and it checks that we are not breaking the execution thread.

// Async functions will always return a value



// Await Keyword

// Await is used to wait for the promise. It could be used within the async block only.

// It makes the code wait until the promise returns a result.

const getData2 = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData2();
console.log(2);


function fun1() {
   
    let promise = 
        new Promise((resolve) => {
        setTimeout(() => {
            resolve(" Ali..");
        }, 1000);
    });
    
    return promise;
}

async function display() {
    let data = await fun1();
    console.log("'Hi'",data);

}
display();




// Simulate an asynchronous operation using a Promise
function Fun(value, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) {
          resolve(`Success: ${value}`);
        } else {
          reject('Error: No value provided');
        }
      }, delay);
    });
  }
  
  // Async function that uses the simulateAsyncOperation function
  async function performOperations() {
    try {
      console.log('Operation 1 started...');
      let result1 =  Fun('Operation 1', 1000);
      console.log(result1);
  
      console.log('Operation 2 started...');
      let result2 = await Fun('Operation 2', 3000);
      console.log(result2);
  
      console.log('Operation 3 started...');
      let result3 = await Fun(null, 5000); // This will cause an error
      console.log(result3);
    } catch (error) {
      console.error(error);
    }
  }
  
  performOperations();
  