const alphEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
	// let rowEn0 = alphEn.slice(0, 12);
	// let rowEn1 = alphEn.slice(12, 23);
	// let rowEn2 = alphEn.slice(23, 33);

const alphRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
  // let rowRu0 = alphRu.slice(0, 12);
  // let rowRu1 = alphRu.slice(12, 23);
  // let rowRu2 = alphRu.slice(23, 33);

const alphUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
  // let rowUa0 = alphUa.slice(0, 12);
  // let rowUa1 = alphUa.slice(12, 23);
  // let rowUa2 = alphUa.slice(23, 33);

const keyboard = {
    layouts: {
      en: {
        topRow: [alphEn.slice(0, 12)],
        middleRow: [alphEn.slice(12, 23)],
        bottomRow: [alphEn.slice(23, 33)]
      },
      ru: {
        topRow: [alphRu.slice(0, 12)],
        middleRow: [alphRu.slice(12, 23)],
        bottomRow: [alphRu.slice(23, 33)]
      },
      ua: {
        topRow: [alphUa.slice(0, 12)],
        middleRow: [alphUa.slice(12, 23)],
        bottomRow: [alphUa.slice(23, 33)]
      }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
  };

  const choise = prompt ( "Please select your language, where: en-0, ru-1, ua-2");
  while ( choise <= -1 || choise >= 3 || isNaN(choise))
  {choise = prompt ( "Dear user, please select from 0 to 2, where: en-0, ru-1, ua-2");
  }

  function getRandCharInAlph() {
    keyboard.currentLang = keyboard.langs[choise];
    const enAlphabet = ( (keyboard.layouts['en']['topRow']) + (keyboard.layouts['en']['middleRow']) + (keyboard.layouts['en']['bottomRow']));
    const ruAlphabet = ( (keyboard.layouts['ru']['topRow']) + (keyboard.layouts['ru']['middleRow']) + (keyboard.layouts['ru']['bottomRow']));
    const uaAlphabet = ( (keyboard.layouts['ua']['topRow']) + (keyboard.layouts['ua']['middleRow']) + (keyboard.layouts['ua']['bottomRow']));

    if (keyboard.currentLang === 'en') {
      alert ( `Your current language is English, random letter is "${enAlphabet[Math.floor(Math.random() * enAlphabet.length)]}"`);
      console.log ( `Your current language is English, random letter is "${enAlphabet[Math.floor(Math.random() * enAlphabet.length)]}"`);
    }
    else if ( keyboard.currentLang === 'ru') {
      alert ( `Your current language is Russian, random letter is  "${ruAlphabet[Math.floor(Math.random() * ruAlphabet.length)]}"`);
      console.log ( `Your current language is Russian, random letter is  "${ruAlphabet[Math.floor(Math.random() * ruAlphabet.length)]}"`);
    }
    else {
      alert ( `Your current language is Ukrainian, random letter is "${uaAlphabet[Math.floor(Math.random() * uaAlphabet.length)]}"`);
      console.log ( `Your current language is Ukrainian, random letter is "${uaAlphabet[Math.floor(Math.random() * uaAlphabet.length)]}"`);
    }
}
getRandCharInAlph();
