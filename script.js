document.getElementById('saveButton').addEventListener('click', function() {
    const infoInput = document.getElementById('infoInput');
    const infoList = document.getElementById('infoList');

    const newItem = document.createElement('li');
    newItem.textContent = infoInput.value;

    infoList.appendChild(newItem);

    infoInput.value = ''; // Очистить поле ввода
});
