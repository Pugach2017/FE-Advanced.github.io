const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: undefined,
  setCharCount: function() {
    while (true) {
      const enter = prompt ( 'Please enter a random number:' );
      if ( this.checkPositiveInteger(enter) === true) {
      charCount = enter;
      break;
    }
      else {
        alert ('Please, try another number')
      }
    }
  },
  checkPositiveInteger: function( charCount) {
    if (( charCount%1 == 0) && ( charCount > 0)){
      return (true);
    }
    else {
      return (false);
    }
  },

  task: [],
  createTask: function () {
    for (let i = 0; i < charCount; i++) {
      const randomInt = Math.floor(Math.random() * (this.chars.length - 1));
      const randomChar = this.chars[randomInt];
      this.task.push(randomChar);
    }
  },
  userInput: [],
  userErrors: 0,
  startTask: function() {
    const userString = prompt( "Please enter this string: " + this.task.join(""));
    this.userInput = userString;
    const trainingStr = this.task.join("");
    for ( let i = 0; i < trainingStr.length; i++) {
      if (this.userInput[i] != trainingStr[i]) {
        this.userErrors += 1;
    }
    }
    if(this.userErrors == 1){
      alert("Thank you, for correct choise!");
  }
    else {
      alert("Unfortunately you have " + this.userErrors + " mistakes. You will have a success in the nearest future!");
  }
}
};
  function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
}
  run();
