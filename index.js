function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Convert the response to JSON
    })
    .then((data) => {
      // Call the renderBooks function with the JSON data
      renderBooks(data);
    })
    
}

// Call the fetchBooks function when the HTML document is loaded
document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});






  // To pass the tests, don't forget to return your fetch!
  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
