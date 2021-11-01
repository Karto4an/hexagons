var selected_color;
var mix_num = 0;
var selected = [];
var to_mix = [];
var i = 0;
var new_color;

const red_button = document.querySelectorAll('.color-picker-red')[0];
const green_button = document.querySelectorAll('.color-picker-green')[0];
const blue_button = document.querySelectorAll('.color-picker-blue')[0];
const yellow_button = document.querySelectorAll('.color-picker-yellow')[0];
const black_button = document.querySelectorAll('.color-picker-black')[0];
const mixer_button = document.querySelectorAll('.color-picker-mixer')[0];
const add_button = document.querySelectorAll('.color-picker-confirm')[0];
const menu_open_button = document.querySelectorAll('.color-picker-settings')[0];
const menu_close_button = document.querySelectorAll('.settings-close')[0];
const color_goal = document.querySelectorAll('.color-goal')[0];
const menu = document.querySelectorAll('#settings')[0];
const congrats = document.querySelectorAll('#congrats')[0];
const green_checkbox = document.querySelectorAll('#green255')[0];

var green = '0, 128, 0';
var rand_colors = ['255, 0, 0',green,'0, 0, 255','255, 255, 0'];
var gen_color = '';
var rand_tries = 2;

var r1 = rand_colors.length-1;
var r2 = rand_colors.length-1;
var color_1 = rand_colors[getRandomInt(0, r1)];
while (color_1 === undefined) {
	color_1 = rand_colors[getRandomInt(0, r1)];
}
rand_colors = rand_colors.filter(item => item !== color_1);
var color_2 = rand_colors[getRandomInt(0, r2)];
while (color_2 === undefined) {
	color_2 = rand_colors[getRandomInt(0, r2)];
}
rand_colors = rand_colors.filter(item => item !== color_2);

var color_1_arr = color_1.split(",");
var color_2_arr = color_2.split(",");

var c_1_r = color_1_arr[0];
var c_1_g = color_1_arr[1];
var c_1_b = color_1_arr[2];

var c_2_r = color_2_arr[0];
var c_2_g = color_2_arr[1];
var c_2_b = color_2_arr[2];

var n_c_r = Math.ceil(c_1_r - (c_1_r - c_2_r)/2);
var n_c_g = Math.ceil(c_1_g - (c_1_g - c_2_g)/2);
var n_c_b = Math.ceil(c_1_b - (c_1_b - c_2_b)/2);

var rand_color_try_1 = `${n_c_r}, ${n_c_g}, ${n_c_b}`;

var r3 = rand_colors.length-1;
var color_3 = rand_colors[getRandomInt(0, r3)];
while (color_3 === undefined) {
	color_3 = rand_colors[getRandomInt(0, r3)];
}

var color_1_arr = rand_color_try_1.split(",");
var color_2_arr = color_3.split(",");

var c_1_r = color_1_arr[0];
var c_1_g = color_1_arr[1];
var c_1_b = color_1_arr[2];

var c_2_r = color_2_arr[0];
var c_2_g = color_2_arr[1];
var c_2_b = color_2_arr[2];

var n_c_r = Math.ceil(c_1_r - (c_1_r - c_2_r)/2);
var n_c_g = Math.ceil(c_1_g - (c_1_g - c_2_g)/2);
var n_c_b = Math.ceil(c_1_b - (c_1_b - c_2_b)/2);

color_goal.style.backgroundColor = `rgb(${n_c_r}, ${n_c_g}, ${n_c_b})`;
console.log(`rgb(${n_c_r}, ${n_c_g}, ${n_c_b})`);
var goal = `rgb(${n_c_r}, ${n_c_g}, ${n_c_b})`;

var animations_js = document.createElement('style')
animations_js.type = 'text/css';

document.querySelectorAll('.hexagon').forEach(item => {
	item.addEventListener('click', event => {
		console.log(event.target);

		if (selected_color == 'add') {
			item.querySelector('path').style.fill = new_color;
		}
		if (selected_color == 'black') {
			item.querySelector('path').style.fill = "rgb(0, 0, 0)";
		}
		if (selected_color == 'red') {
			item.querySelector('path').style.fill = "rgb(255, 0, 0)";
		}
		if (selected_color == 'green') {
			item.querySelector('path').style.fill = `rgb(${green})`;
		}
		if (selected_color == 'blue') {
			item.querySelector('path').style.fill = "rgb(0, 0, 255)";
		}
		if (selected_color == 'yellow') {
			item.querySelector('path').style.fill = "rgb(255, 255, 0)";
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
				console.log(color_1);
				selected = [];
				mix_num = 0;
				to_mix = [];
				i = 0;

				var color_1 = color_1.replace(/[^0-9\,]+/g, "");
				var color_2 = color_2.replace(/[^0-9\,]+/g, "");

				var color_1_arr = color_1.split(",");
				var color_2_arr = color_2.split(",");

				var c_1_r = color_1_arr[0];
				var c_1_g = color_1_arr[1];
				var c_1_b = color_1_arr[2];

				var c_2_r = color_2_arr[0];
				var c_2_g = color_2_arr[1];
				var c_2_b = color_2_arr[2];

				var n_c_r = Math.ceil(c_1_r - (c_1_r - c_2_r)/2);
				var n_c_g = Math.ceil(c_1_g - (c_1_g - c_2_g)/2);
				var n_c_b = Math.ceil(c_1_b - (c_1_b - c_2_b)/2);
				console.log(n_c_r, n_c_g, n_c_b);

				new_color = `rgb(${n_c_r}, ${n_c_g}, ${n_c_b})`;
				document.querySelectorAll('.color-picker-confirm svg')[0].style.backgroundColor = new_color;
				if (new_color == goal) {
					congrats.classList.add('show');
				}
			}
		}
	});
});

add_button.addEventListener('click', event => {
	uncheck_colors();
	add_button.classList.add('checked');
	selected_color = 'add';
});

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

yellow_button.addEventListener('click', event => {
	uncheck_colors();
	yellow_button.classList.add('checked-yellow');
	selected_color = 'yellow';
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

menu_open_button.addEventListener('click', event => {
	menu.classList.add('show');
});
menu_close_button.addEventListener('click', event => {
	menu.classList.remove('show');
});

green_checkbox.onclick = function(event) {
	if (green_checkbox.checked == true) {
		green = '0, 255, 0';
		green_button.style.backgroundColor = `rgb(${green})`;
	} else {
		green = '0, 128, 0';
		green_button.style.backgroundColor = `rgb(${green})`;
	}
};

function uncheck_colors() {
	document.querySelectorAll('.color-picker button').forEach(item =>{
		if (item.classList.contains('checked')){
			item.classList.remove('checked');
		}
		if (item.classList.contains('checked-yellow')){
			item.classList.remove('checked-yellow');
		}
	});
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
	return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}