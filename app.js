console.log('Funguju!');

const textPozpatku = (text) => {
  return text.split('').reverse().join('');
};

const seznam = document.querySelectorAll('li');

seznam.forEach((li) => {
  if (
    li.textContent.toLowerCase() === textPozpatku(li.textContent.toLowerCase())
  ) {
    li.classList.add('palindrom');
  }
});

// textPozpatku('Ahoj světe') // 'etěvs johA'
// textPozpatku('Kajak') // 'kajaK'
