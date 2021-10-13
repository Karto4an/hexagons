var selected_color;

const red_button = document.querySelectorAll('.color-picker-red')[0];
const green_button = document.querySelectorAll('.color-picker-green')[0];
const blue_button = document.querySelectorAll('.color-picker-blue')[0];

document.querySelectorAll('.hexagon').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target);
        item.style.animation = "fadeOut 1s both";
    });
});

// border: solid gold 5px;


red_button.addEventListener('click', event => {
    console.log(event.target);
    uncheck_colors();
    red_button.classList.add('checked');
});


green_button.addEventListener('click', event => {
    console.log(event.target);
    uncheck_colors();
    green_button.classList.add('checked');
});


blue_button.addEventListener('click', event => {
    console.log(event.target);
    uncheck_colors();
    blue_button.classList.add('checked');
});


function uncheck_colors() {
    if (red_button.classList.contains('checked')){
        red_button.classList.remove('checked');
    }
    if (green_button.classList.contains('checked')){
        green_button.classList.remove('checked');
    }
    if (blue_button.classList.contains('checked')){
        blue_button.classList.remove('checked');
    }
}