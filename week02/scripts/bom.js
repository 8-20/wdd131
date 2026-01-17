const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
input.focus();

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = '';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    } else {
        input.value = '';
        input.focus();
    }
});







