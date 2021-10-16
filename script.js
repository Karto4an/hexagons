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
				console.log(color_1);
				selected = [];
				mix_num = 0;
				to_mix = [];
				i = 0;

				color_1 = color_1.replace(/[^0-9\,]+/g, "");
				color_2 = color_2.replace(/[^0-9\,]+/g, "");

				var color_1_arr = color_1.split(",");
				var color_2_arr = color_2.split(",");
				//console.log(typeof(color_1_arr));

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

				document.querySelectorAll('.color-picker-confirm svg')[0].style.backgroundColor = `rgb(${n_c_r}, ${n_c_g}, ${n_c_b})`;
			}
		}
	});
});

function split_rgb(color_1, color_2) {
	var color_1_r;
	var color_1_g;
	var color_1_b;

	if (color_1 != undefined && color_2 != undefined){
	color_1 = color_1.replace(/[^0-9\,]+/g, "");
	color_2 = color_2.replace(/[^0-9\,]+/g, "");

	var color_1_arr = color_1.split(",");
	var color_2_arr = color_2.split(",");
	console.log(color_2_arr, color_1_arr);

	var i = 0;
	color_1_arr.forEach(element => {
		if (i == 0) {
			color_1_r = element;
		}
		if (i == 1) {
			color_1_g = element;
		}
		if (i == 2) {
			color_1_b = element;
		}
	});
	color_2_arr.forEach(element => {
		// if (i == 0) {
		// 	console.log(element);
		// }
		// if (i == 1) {
		// 	console.log(element);
		// }
		// if (i == 2) {
		// 	console.log(element);
		// }
	});
}
i = 0;
console.log(color_1_r, color_1_g, color_1_b);
return color_1_r, color_1_g, color_1_b;
}

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
	document.querySelectorAll('.color-picker button').forEach(item =>{
		if (item.classList.contains('checked')){
			item.classList.remove('checked');
		}
	});
}
