const ALPHABET_EN = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

	const addKeyboardLayout = (alphabet) => {

	    let keyboard = {
	        topRow: [],
	        middleRow: [],
	        bottomRow: []
	    };
	    let alphabetArray = alphabet.split("");

	    alphabetArray.forEach(function(item, i) {
	        if (i<12) {keyboard.topRow[i] = item}
	        else if (i<23) {keyboard.middleRow[i-12] = item}
	        else {keyboard.bottomRow[i-23] = item}
	    });

	    return keyboard;
	};

	const createLayout = function () {
	  let result = '<div class="container">';

	  for (let key in this) {
	    result += `<div class="layout-container" id="${key}">`;
	    this[key].forEach(function(item){
	        result += `<button type="button" class="button">${item}</button>`;
	    });
	    result += `</div>`;
	  };

	  result += `</div>`;
	  return result;
	}

	document.body.innerHTML += createLayout.call(addKeyboardLayout(ALPHABET_EN));
