let buttons = document.querySelectorAll('.drum');
let sounds = {
    'w': 'sounds/tom-1.mp3',
    'a': 'sounds/tom-2.mp3',
    's': 'sounds/tom-3.mp3',
    'd': 'sounds/tom-4.mp3',
    'j': 'sounds/snare.mp3',
    'k': 'sounds/crash.mp3',
    'l': 'sounds/kick-bass.mp3'
};

function playSound(key) {
    let soundPath = sounds[key];
    if (soundPath) {
        let audio = new Audio(soundPath);
        audio.play();
    }
}

function animateButton(key) {
    let button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 100);
    }
}

function handleEvent(event) {
    let key = event.key || event.target.innerText;
    playSound(key);
    animateButton(key);
}

buttons.forEach(button => {
    button.addEventListener('click', handleEvent);
});

document.addEventListener('keydown', handleEvent);
