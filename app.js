//FROM: https://enlight.ml/web-paint
var canvas = document.getElementById('draw');

ctx = canvas.getContext('2d');
resize(); 

//resizes canvas automatically
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

//event listeners
window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

//last known position
var pos = {x: 0, y: 0};

function setPosition(e) {
	pos.x = e.clientX;
	pos.y = e.clientY;
}

//draws lines
function draw(e)	{
	if (e.buttons !== 1) return; // if mouse is pressed.....

	var color = document.getElementById('hex').value;

	ctx.beginPath();

	ctx.lineWidth = 20;
	ctx.lineCap = 'round';
	ctx.strokeStyle = color;

	ctx.moveTo(pos.x, pos.y);
	setPosition(e);
	ctx.lineTo(pos.x, pos.y);

	ctx.stroke();
}

//FROM: https://enlight.ml/web-paint

var clearbutton = document.getElementbyID('clear');
clearbutton.addEventListener("click", clear)

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas,height)
}