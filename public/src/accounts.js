function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}




function getTotalNumberOfBorrows(account, books) {
  //Pass userID from Accounts
  const userID = account.id;
  //Inialize Borrowed Counter
  let totalBorrowed = 0;
  //Loop thru books account values using "For of" to access in the "borrows" array.
  for (let borrowedBooks of books) {
    //check for ID match between in the "borrows" section of books and accounts id.
    if (borrowedBooks.borrows.some((person) => person.id === userID)) {
      //increment borrowed counter 
      totalBorrowed++;
    }
  }
  //return final total
  return totalBorrowed;
}

//CUSTOM FUNCTIONS FOR 'getBooksPossessedByAccount(account, books, authors)'

function checkedOutBooks(account, books) {
  //Pass userID from Accounts
  const userID = account.id;
  //Inialize checkoutArray to store the objects.
  let checkoutArray = [];
  //Loop thru books account values using "For of" to access in the "borrows" array.
  for (let borrowedBooks of books) {
    //check for ID match between in the "borrows" section of books and the check whether the "returned" flag in the accounts array is false
    if (borrowedBooks.borrows.some((person) => person.id === userID && person.returned === false)) {
      //push equated object into checkoutArray.
      checkoutArray.push(borrowedBooks);
      //Get authorID from the array.
    }
  }
  //return checkoutArray of Books.
  return checkoutArray;
}

function getAuthor(books, authors) {
  //Using "For of" loop to access the author id values from book array.
  for (let borrowedBooks of books) {
    //get authorID from the books array.
    const authorId = borrowedBooks.authorId;
    //Find Author ID value from the authors array and confirm match with the author id extracted from above.
    const theAuthor = authors.find((author) => author.id === authorId);
    //Add matched author to the books array
    borrowedBooks[`author`] = theAuthor;
  }
  //return array with matched author ids. 
  return books;
}

function getBooksPossessedByAccount(account, books, authors) {
  //Get an array of checked out books with the author ids.
  let checkout = checkedOutBooks(account, books);
  //Get an array of books with the matched author added.  
  let output = getAuthor(checkout, authors);
  //return this array
  return output;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
