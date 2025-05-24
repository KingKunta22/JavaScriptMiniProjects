const redBtn = document.querySelector('#red');
const greenBtn = document.querySelector('#green');
const blueBtn = document.querySelector('#blue');
const randomBtn = document.querySelector('#random');
const body = document.querySelector('body');

redBtn.addEventListener('click', () => [
    body.style.backgroundColor = "red"
])

greenBtn.addEventListener('click', () => [
    body.style.backgroundColor = "green"
])

blueBtn.addEventListener('click', () => [
    body.style.backgroundColor = "blue"
])

function generateRandomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const randomColor = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = randomColor;
}

randomBtn.addEventListener('click', () => {
    generateRandomColor();
})