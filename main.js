function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'Not read yet');
theHobbit.info();

console.log(theHobbit.info());
