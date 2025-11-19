function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
        addToHistory(expression, result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);
}

function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
}

function backspace() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});