import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './business_logic.js';

function displayEntry(entry){
  let metricsString = `Word count: ${entry.wordCount}<br>Vowel count: ${entry.vowels}<br>Consonant count: ${entry.consonants}<br>Teaser: ${entry.teaser}`;
  $("#displayTitle").text(entry.title);
  $("#displayMetrics").html(metricsString);
  $("#displayContent").text(entry.content);
}

$(document).ready(function() {
  $("#journalForm").submit(function(event){
    event.preventDefault();
    const inputTitle = $("#titleInput").val();
    const inputContent = $("#contentInput").val();
    const entryObject = new Entry(inputTitle, inputContent);
    entryObject.wordCounter();
    entryObject.characterCounter();
    entryObject.getTeaser();
    displayEntry(entryObject);
  });
});