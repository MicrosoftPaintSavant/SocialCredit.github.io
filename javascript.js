const nothingButton = document.getElementById('nothing');
const somethingButton = document.getElementById('something');
const deathButton = document.getElementById('death');
const goodEnding = document.querySelector('.container-video1');
const badEnding = document.querySelector('.container-video2');
const badEnding2 = document.querySelector('.container-video3');
const exitButtons = document.querySelectorAll('.exit');

nothingButton.addEventListener('click', () => {
    goodEnding.classList.add('show');
});

somethingButton.addEventListener('click', () => {
    badEnding.classList.add('show');
});

deathButton.addEventListener('click', () => {
    badEnding2.classList.add('show');
});

exitButtons.forEach(exitButton => {
    exitButton.addEventListener('click', () => {
        goodEnding.classList.remove('show');
        badEnding.classList.remove('show');
        badEnding2.classList.remove('show');
    });
});
