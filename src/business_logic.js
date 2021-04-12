export function Entry (title, content) {
  this.title= title;
  this.content= content;
  this.wordCount= 0;
  this.vowels= 0;
  this.consonants= 0;
}

Entry.prototype.wordCounter = function () {
  const wordArray = this.content.split(" ");
  this.wordCount= wordArray.length
}