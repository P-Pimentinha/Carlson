const button = document.querySelector('.start-btn');
const buttonTwo = document.querySelector('.start-btn-two');
const germanWord = document.getElementById('germanWord');
const englishWord = document.getElementById('englishWord');

let deuWord = '';
let engWord = '';
let randomSubject = '';
let wordsApiFetch = [];

const url = '/api/v1/words/';

const getAllWords = async () => {
  try {
    const { data } = await axios.get(url);
    const { words } = data;
    wordsApiFetch = words;
    const localId = localStorage.getItem('word_id');
    console.log(wordsApiFetch);
    if (localId) {
      let wordIndex = wordsApiFetch.findIndex((x) => x._id === localId);
      germanWord.innerHTML = wordsApiFetch[wordIndex].wort;
      englishWord.innerHTML = wordsApiFetch[wordIndex].word;
    }
  } catch (e) {
    console.log(e);
  }
};

getAllWords();

const randomWordGenerator = () => {
  const random = Math.floor(Math.random() * wordsApiFetch.length);

  localStorage.setItem('word_id', wordsApiFetch[random]._id);

  germanWord.innerHTML = wordsApiFetch[random].wort;

  englishWord.innerHTML = wordsApiFetch[random].word;
};

button.addEventListener('click', () => {
  randomWordGenerator();
});
