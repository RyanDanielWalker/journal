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

Entry.prototype.vowelCounter = function () {
  const vowelArray = this.content.split("");
  //string of vowels
  //for loop of some sort for each letter
  //check each if vowel string includes that letter
  //regex: ([aeiouAEIOU])
  if (vowelArray.includes


    const vowels = ["a", "e", "i", "o", "u"]
    const wordArray = this.content.split(" ")
    wordArray.forEach(function(element){
      vowels.forEach(function(vowel){
        if (element.includes(vowel))

      })
    })
}

