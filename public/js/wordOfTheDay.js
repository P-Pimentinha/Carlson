const button = document.querySelector('.start-btn');
const buttonTwo = document.querySelector('.start-btn-two');

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
  } catch (e) {
    console.log(e);
  }
};

getAllWords();

const randomWordGenerator = () => {
  const random = Math.floor(Math.random() * wordsApiFetch.length);

  localStorage.setItem('word_id', wordsApiFetch[random]._id);

  document.getElementById('germanWord').innerHTML = wordsApiFetch[random].wort;

  document.getElementById('englishWord').innerHTML = wordsApiFetch[random].word;
};

button.addEventListener('click', () => {
  randomWordGenerator();
});
