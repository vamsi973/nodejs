//creating basic promise
/**
 *  => promise has 3 states
 *    state 1 will be "pending" state , it is wating for the result
 *    state 2 is operation was completed , it was resolved with the result
 *    state 3 operation failed and promise rejected with error
 *
 *  They don’t execute until they are used. 
 *  A promise is not executed when created but rather when the code that consumes it (e.g., .then(), .catch(), await) is executed.
 *  If any promise in a chain is rejected, the error can be caught by the nearest .catch() handler. Using try/catch with async/await is also a cleaner way to handle errors
 *  Promise.all() resolves when all promises in an array are resolved. If any of them rejects, the entire operation fails.
 *  Promise.race() resolves or rejects as soon as the first promise in the array resolves or rejects.

 */


// Example 1

const promise = new Promise((resolve, reject) => {
    let status = true;
    if (status) {
        resolve("Operation was successful!");
    } else {
        reject("operation was failed");
    }
})
console.log(promise)

console.log("------------------------example-1 ended------------------------")
// Example 2
console.log("_==============================================================================")
console.log("------------------------example 2 started------------------------")
const promise2 = new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
        if (status) {
            resolve("Operation was successful!");
        } else {
            reject("operation was failed");
        }
    }, 5000)

});
console.log(promise2); // checking 1
promise2.then((result) => {
    console.log(result);
}).catch(err => console.log(err));
console.log(promise2); //checking2


console.log("------------------------example 2 ended------------------------")
console.log("_==============================================================================")
console.log("------------------------example 3 started------------------------")

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => { console.log("First operation successful") }, 1000);
    resolve("First operation successful");
});

promise3.then(result => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second operation successful");
        }, 2000);
    })
}).then((result1) => {
    console.log(result1);
}).catch(err => console.log(err));

// Example4

const promise5 = new Promise((resolve, reject) => {
    resolve("promise resolved in promise5")
});
async function asyncronousfunction() {
    let promiseref = await promise5;
    console.log(promiseref)

}
asyncronousfunction()

const p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'First Promise'));
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Second Promise'));
Promise.all([p1, p2]).then(values => {
    console.log(values); // ["First Promise", "Second Promise"]
}).catch(error => {
    console.log(error); // Handle errors if any promise fails
});