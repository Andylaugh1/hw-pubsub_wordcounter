const PubSub = require('../helpers/pub_sub.js');

const  WordCounter = function () {

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:inputted-word', (event) => {
    const inputtedWord = event.detail;
    const result = this.countWords(inputtedWord);
    console.log(result);
    PubSub.publish('WordCounter:result', result);
  })
};

WordCounter.prototype.countWords = function (word) {
  const wordsArray = word.split(' ');
  return wordsArray.length;
}

module.exports = WordCounter;
