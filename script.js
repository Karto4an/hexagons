var selected_color;

const red_button = document.querySelectorAll('.color-picker-red')[0];
const green_button = document.querySelectorAll('.color-picker-green')[0];
const blue_button = document.querySelectorAll('.color-picker-blue')[0];
const black_button = document.querySelectorAll('.color-picker-black')[0];

document.querySelectorAll('.hexagon').forEach(item => {
	item.addEventListener('click', event => {
		console.log(event.target);

		if (selected_color == 'black') {
			item.style.animation = "fadeOutBlack 1s both";
		}
		if (selected_color == 'red') {
			item.querySelector('path').style.animation = "fadeOutRed 1s both";
		}
		if (selected_color == 'green') {
			item.querySelector('path').style.animation = "fadeOutGreen 1s both";
		}
		if (selected_color == 'blue') {
			item.querySelector('path').style.animation = "fadeOutBlue 1s both";
		}
	});
});

// border: solid gold 5px;

red_button.addEventListener('click', event => {
	uncheck_colors();
	red_button.classList.add('checked');
	selected_color = 'red';
});


green_button.addEventListener('click', event => {
	uncheck_colors();
	green_button.classList.add('checked');
	selected_color = 'green';
});


blue_button.addEventListener('click', event => {
	uncheck_colors();
	blue_button.classList.add('checked');
	selected_color = 'blue';
});

black_button.addEventListener('click', event => {
	uncheck_colors();
	black_button.classList.add('checked');
	selected_color = 'black';
});

function uncheck_colors() {
	if (red_button.classList.contains('checked')) {
		red_button.classList.remove('checked');
	}
	if (green_button.classList.contains('checked')) {
		green_button.classList.remove('checked');
	}
	if (blue_button.classList.contains('checked')) {
		blue_button.classList.remove('checked');
	}
	if (black_button.classList.contains('checked')) {
		black_button.classList.remove('checked');
	}
}