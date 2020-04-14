const bestCase = document.querySelector('#best-case');
const bestCaseOpener = document.querySelector('#best-case-opener');
let toggle1 = false;
bestCaseOpener.addEventListener('click', () => {
  toggle1 = !toggle1;

  if (toggle1 == 1) {
    bestCase.classList.add('showBestCase');
  } else {
    bestCase.classList.remove('showBestCase');
  }
});

const worstCase = document.querySelector('#worst-case');
const worstCaseOpener = document.querySelector('#worst-case-opener');
let toggle2 = false;
worstCaseOpener.addEventListener('click', () => {
  toggle2 = !toggle2;
  if (toggle2 == 1) {
    worstCase.classList.add('showWorstCase');
  } else {
    worstCase.classList.remove('showWorstCase');
  }
});