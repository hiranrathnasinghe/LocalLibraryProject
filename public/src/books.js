function findAuthorById(authors, id) {
  //return an author object with matched id.
  return authors.find((author) => author.id=== id);
}

function findBookById(books, id) {
  //return an book object with matched id.
  return books.find((book) => book.id=== id);
}

function partitionBooksByBorrowedStatus(books) {
//Using filter method to extract all returned books.
const returnedBook = books.filter((book) => !book.borrows.some((borrow)=> borrow.returned === false ));
//Using filter method to extract all unreturned books.
const notReturnedBook = books.filter((book) => book.borrows.some((borrow)=> borrow.returned === false ));
//return as a combined array.
return [notReturnedBook, returnedBook];
}

//Custom function for 'getBorrowersForBook' function.
function findAccount (id,accounts)
{
  //Return account for matching id.
  return accounts.find((account)=> account.id === id);

}

function getBorrowersForBook(book, accounts) {
  //initialize output array
  const output = [];
  //Use for of loop to go thru thr borrows section of the book object
  for(let account of book.borrows)
  {
    //Limit output to 10 records
    if(output.length <10)
    {
      //Get account ID
      const Borrower = findAccount(account.id,accounts);
      //Move Returned items to the returned section in "Borrower"
      Borrower[`returned`] = account.returned;
      //Push record to the output array.
      output.push(Borrower);
    } 

  }
  // return completed array.
  return output;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
