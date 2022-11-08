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
    words.map((word) => {
      wordsApiFetch.push(word);
      return;
    });
  } catch (e) {
    console.log(e);
  }
};

getAllWords();

const randomWordGenerator = () => {
  const random = Math.floor(Math.random() * wordsApiFetch.length);

  deuWord = wordsApiFetch[random].wort;

  engWord = wordsApiFetch[random].word;

  console.log(wordsApiFetch[random]._id);

  document.getElementById('germanWord').innerHTML = deuWord;

  document.getElementById('englishWord').innerHTML = engWord;
};

button.addEventListener('click', () => {
  randomWordGenerator();
});
