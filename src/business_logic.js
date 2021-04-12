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

Entry.prototype.characterCounter = function () {
  const textArray = this.content.toLowerCase().split(""); //splitting string into characters
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = /[b-df-hj-np-tv-z]/i;
  let vowelCount = 0;
  let consonantCount = 0;
  console.log(textArray.length);
  textArray.forEach(function(element){
    // console.log(vowels.includes(element));
    if (vowels.includes(element)){
      vowelCount += 1;
    } else if (consonants.test(element)) {
      consonantCount += 1;
    }
  });
  this.vowels = vowelCount;
  this.consonants = consonantCount;
}

// const titleInput = "Some stuff";
// const contentInput = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis magna etiam tempor. Enim neque volutpat ac tincidunt. Sit amet porttitor eget dolor morbi. Vestibulum sed arcu non odio euismod lacinia. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Morbi tempus iaculis urna id volutpat lacus laoreet non.";
// const entryObject = new Entry(titleInput, contentInput);
// entryObject.wordCounter();
// entryObject.characterCounter();
// console.log(entryObject);