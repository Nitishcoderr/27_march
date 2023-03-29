// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

function logBookTittle(books,callback){
    const titles = books.map(book => book.title)
    callback(titles.sort());
}

const books =[
    { title: 'Thor', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'Superman', author: 'Harper Lee', year: 1960 },
    { title: 'Marvel', author: 'George Orwell', year: 1949 }
  ];


  function printBooktittle(titles){
    console.log(`The books in alphabetical order is :`);
    titles.forEach(title => console.log(title));
  }

  logBookTittle(books,printBooktittle);