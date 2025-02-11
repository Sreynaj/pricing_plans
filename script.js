const buttons = document.querySelectorAll('.subscribe-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Subscribed to ' + button.parentElement.querySelector('h2').innerText + ' plan!');
    });
});