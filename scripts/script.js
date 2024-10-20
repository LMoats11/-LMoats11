console.log("Welcome to Luke Moat's Dev Page!");

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Button clicked: ${this.textContent}`);
        });
    });
});
