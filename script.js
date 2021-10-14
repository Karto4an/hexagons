var selected_color;
var mix_num = 0;
var selected = [];
var to_mix = [];
var color_1;
var color_2;
var i = 0;

const red_button = document.querySelectorAll('.color-picker-red')[0];
const green_button = document.querySelectorAll('.color-picker-green')[0];
const blue_button = document.querySelectorAll('.color-picker-blue')[0];
const black_button = document.querySelectorAll('.color-picker-black')[0];
const mixer_button = document.querySelectorAll('.color-picker-mixer')[0];

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
		if (selected_color == 'mix') {
			if (mix_num < 1) {
				item.querySelector('path').style.stroke = "#dc143c";
				item.querySelector('path').style.strokeWidth = "5px";
				selected.push(item);
				mix_num ++;
			} else {
				if (mix_num == 1){
					selected.push(item);
					mix_num = 0;
				}
				selected.forEach(item => {
					item.querySelector('path').style.stroke = "";
					item.querySelector('path').style.strokeWidth = "";

					to_mix.push(window.getComputedStyle(item.querySelector('path')).getPropertyValue('fill'));

					to_mix.forEach(rgb => {
						if (i == 0){
							color_1 = rgb;
							i++;
						} else {
							color_2 = rgb;
							i++;
						}
					});
				});
			selected = [];
			mix_num = 0;
			to_mix = [];
			i = 0;

			if (color_1 != undefined && color_2 != undefined){
				console.log(color_1, color_2)
			}
			}
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

mixer_button.addEventListener('click', event => {
	uncheck_colors();
	mixer_button.classList.add('checked');
	selected_color = 'mix';
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
	if (mixer_button.classList.contains('checked')) {
		mixer_button.classList.remove('checked');
	}
}
