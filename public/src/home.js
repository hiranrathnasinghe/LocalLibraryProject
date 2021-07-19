function getTotalBooksCount(books) {
  //get array length
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //get array length
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const checkedOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  return checkedOut.length;
}

function getMostCommonGenres(books) {
  //initialize output array
  let output = [];
  //map genres from books array
  const genres = books.map((book) => book.genre);
  //Accumulate genres count
  output = genres.reduce((account, compGenre) => {
    //Check if the genre is in the dataset, if so increment counter by 1, otherwise push new genre to the array.
    account.some((outputGenre) => outputGenre.name === compGenre) ? account.find((outputGenre) => outputGenre.name === compGenre).count += 1 : account.push({ "name": compGenre, count: 1 });
    //return account
    return account;
  }, []);
  //sort output from highet count to lowest
  output.sort((item1, item2) => item2.count - item1.count)
  //limit output to 5 elements.
  output.length = 5;
  //return final output array
  return output;
}

function getMostPopularBooks(books) { 
   //initialize output array
  const output = [];
  //Use for of loop to loop thru values in books array
  for(let book of books)
  {
    //Push book title and the book quantites derived from borrows sub array.
    output.push({"name": book.title , "count": book.borrows.length});
  }
  //Sort array from highest to the lowest count
  output.sort((item1 , item2) => item2.count - item1.count );
  //limit output array to 5 elements.
  output.length = 5;
  //return array
  return output;
}

//CUSTOM Function for 'getMostPopularAuthor'
function getAuthorNames(authors,id)
{
  //Find author for selected id.
  selectedAuthor=authors.find((author) => author.id=== id);
  //return selected first name and last name.
  return (`${selectedAuthor.name.first} ${selectedAuthor.name.last}`);
}

function getMostPopularAuthors(books, authors) { 
   //initialize output array
  const result =[];
   //Loop thru book array values
  for(let book of books)
  {
    //find author name and if it matches increment counter otherwise add a new record with name and count keys. 
    const selectedAuthor = result.find((author )=> getAuthorNames(authors,book.authorId) === author.name )
    selectedAuthor  ? selectedAuthor .count += book.borrows.length : result.push({"name": getAuthorNames(authors,book.authorId), "count": book.borrows.length });
  }
  //Sort count from highest to lowest.
  result.sort((item1 , item2) => item2.count - item1.count );
  //limit array to 5 elements.
  result.length = 5;
  //return array.
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
