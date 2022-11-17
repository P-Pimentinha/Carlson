// returns a new array with random index
function randomArrayValues(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export { randomArrayValues };
