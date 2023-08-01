const buttonEL = document.querySelector('button');
const inputEL = document.querySelector('input');
const listEl = document.querySelector('ul');

function addList() {
    const enteredValue = inputEL.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
    inputEL.value = '';
}

buttonEL.addEventListener('click', addList);