const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout (alphabet) {
  const row0 = alphabet.slice ('', 12);
  console.log( row0.split (""));
 const row1 = alphabet.slice (12,23);
  console.log( row1.split (""));
  const row2 = alphabet.slice (23, 34);
  console.log( row2.split (""));
  var row = (row0 + row1 + row2);
  console.log( row);
  function getRandCharInRow(row) {
  var randomRow = Math.floor(Math.random(row) * 3);
  console.log(randomRow);
  var randomId = Math.floor(Math.random(randomRow) * 34);
  console.log(randomId);
  return row [randomId];
}
  console.log(getRandCharInRow(row));
  function getRandCharInAlph(alphabet) {
    var randomInd = Math.floor(Math.random(row) * 34);
    console.log(randomInd);
    return row [randomInd];
}
  console.log(getRandCharInAlph(row));
}

  const keybord = addKeyboardLayout(alphabet);
  console.log (keybord);
