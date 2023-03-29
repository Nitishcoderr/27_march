// Write a function that asynchronously fetches data from an API
//jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchdata(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchdata();

