const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    const inputtedWord = event.target.text.value;
    console.log(inputtedWord);
    PubSub.publish('InputView:word-inputted', inputtedWord)
    event.preventDefault();
  })



};

module.exports = InputView;
