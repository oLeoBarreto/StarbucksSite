function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeColorCircle(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeColorWord(color){
    const word = document.querySelector('span');
    word.style.color = color;
}