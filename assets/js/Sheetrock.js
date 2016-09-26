// Sheetrock.js 1.0 Example 2
// https://chriszarate.github.io/sheetrock/

// Let’s look at switch hitters and rank them by batting average. 
// We’ll only grab the columns we care about and fetch just the 
// top ten to help focus the reader’s attention.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1KIgmetKy8J2zBSUqNr1E29Kt92tEZ5Y_9itNsvMocAE/edit#gid=0';

// Load top ten switch hitters.
$('#switch-hitters').sheetrock({
  url: mySpreadsheet,
  query: "select A,B",
  fetchSize: 100
});
