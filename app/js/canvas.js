var canvas = document.querySelector('canvas');

// set styles to canvas:
canvas.width = window.innerWidth;
canvas.height = 118;
canvas.style.position = 'absolute';

var c = canvas.getContext('2d');

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 8,
	//minRadius = 4,
	colorArray = [
		'rgba(255, 0, 0, 0.5)',
		'rgba(0, 0, 255, 0.5)'
	];

window.addEventListener('mousemove', function(event) {
	
	mouse.x = event.x;
	mouse.y = event.y;

});

window.addEventListener('resize', function() {

	canvas.width = window.innerWidth;
	init();
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function () {
		c.beginPath();
		c.strokeStyle = 'rgba(0, 0, 0, 0.8)';
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// Interactivity
		if (mouse.x - this.x < 31 && mouse.x - this.x > -31
			/*&& mouse.y - this.y < 10 && mouse.y - this.y > -10*/) {
			if (this.radius < maxRadius) {
				this.radius += 1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		this.draw();
	}
}

var circleArray = [];


function init() {

	circleArray = [];

	for (var i = 0; i < 620; i++) {
		//var radius = 14,
		var radius = Math.random() * 3 + 1;
		x = Math.random() * (canvas.width - radius * 2) + radius,
		y = Math.random() * (canvas.height - radius * 2) + radius,
		dx = (Math.random() - 0.5) * 1,
		dy = (Math.random() - 0.5) * 1;

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}

}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

init();
animate();