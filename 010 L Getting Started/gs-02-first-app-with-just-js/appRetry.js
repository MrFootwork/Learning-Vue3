const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');

function inputEnter(enterPressed) {
  console.log(enterPressed);
  if (enterPressed.key == 'Enter') {
    buttonEl.click();
  }
}

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

inputEl.addEventListener('keypress', inputEnter);
buttonEl.addEventListener('click', addGoal);
