const hexNums = 'abcdef';
const decNums = '0123456789';
const allNums = hexNums + decNums;
const lim = 6;

function changeBg() {
    let colour = '';
    //generating a random colour:
    for(let i = 0; i < lim; i++){
        colour += allNums.charAt(Math.floor(Math.random() * allNums.length));
    }

    document.getElementById('hex').innerHTML = `Hex value = <strong>#${colour}</strong>`;
    document.body.style.background = '#'+colour;
}

const letters = 'qwertyuiopasdfghjklçzxcvbnm';

const randomLetterGenerator = () => {
    const pos = Math.ceil(10 * letters.length / (Math.random() * 100));
    if (pos > letters.length)   return randomLetterGenerator();
    return letters[pos];
}

const randomNumberGenerator = () => {
    return Math.ceil(Math.random() * 10);
}

const randomURLGenerator = () => {
    const url = 'https://prnt.sc/';
    let dir = ''

    for(let i = 0; i < 2; i++)
        dir += randomLetterGenerator();

    for(let j = 0; j < 4; j++)
        dir += randomNumberGenerator();

    return url + dir;
}

const btn = document.querySelector('#random-img')

function getRandomImg(){
    const win = window.open(randomURLGenerator(), '_blank');
    win.focus();
}

btn.addEventListener('click', () => {
    openInNewTab(randomLetterGenerator());
});

setInterval(() => {
    changeBg();
}, 700);
