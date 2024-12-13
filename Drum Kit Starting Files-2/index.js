const drumButtons = document.querySelectorAll('.drum');

function playSound(key) {
    switch (key) {
        case 'w':
            new Audio('sounds/crash.mp3').play();
            break;
        case 'a':
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case 's':
            new Audio('sounds/snare.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom-1.mp3').play();
            break;
        case 'j':
            new Audio('sounds/tom-2.mp3').play();
            break;
        case 'k':
            new Audio('sounds/tom-3.mp3').play();
            break;
        case 'l':
            new Audio('sounds/tom-4.mp3').play();
            break;
        default:
            console.log('Invalid key:', key);
    }
}

function addAnimation(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add('pressed');
        setTimeout(() => activeButton.classList.remove('pressed'), 100);
    }
}

drumButtons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonKey = this.innerHTML;
        playSound(buttonKey);
        addAnimation(buttonKey);
    });
});

document.addEventListener('keydown', function (event) {
    playSound(event.key);
    addAnimation(event.key);
});
