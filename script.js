var qwerty

document.querySelectorAll('.hexagon').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target);
        qwerty = event.target;
        qwerty.style.filter = "brightness(0)";
    });
});
