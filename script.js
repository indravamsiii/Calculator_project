/* script.js */
let currentdisplay = '';
document.querySelector('#display').value = currentdisplay;

function calculate() {
    try {
        currentdisplay = currentdisplay.replace('x', '*');
        let result = eval(currentdisplay);
        currentdisplay = result.toString();
        document.querySelector('#display').value = currentdisplay;
    } catch (error) {
        currentdisplay = 'Error';
        document.querySelector('#display').value = currentdisplay;
    }
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const outline = document.querySelector('.outline');
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    outline.classList.toggle('dark-mode');
    display.classList.toggle('dark-mode');
    buttons.forEach(button => button.classList.toggle('dark-mode'));

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
}

setInterval(updateClock, 1000);
updateClock();
