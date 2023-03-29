// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
// that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
// to simulate an error, and then display an error message on the webpage.

fetch('https://jsonplaceholder.typicode.com/posts/123456789')
.then(response => {
    if(!response.ok){
        throw new Error('Neteork response is not ok!')
    }
    return response.json();
})
.then(data => console.log(data))

.catch(error => {
    console.error('There was a problem to fetch the data' ,error);

    const errorElement = document.createElement('p');
    errorElement.textContent = 'There was a problem in fetch operation :' + error.message
    document.body.appendChild(errorElement)
});


