var canvas = document.querySelector('canvas');

// set styles to canvas:
canvas.width = window.innerWidth;
canvas.height = 118;
canvas.style.position = 'absolute';

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = 'rgba(0, 0, 255, 0.5)';
		c.fill();
		c.stroke();
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

		this.draw();
	}
}


var circleArray = [];

for (var i = 0; i < 31; i++) {
	var radius = 14,
	x = Math.random() * (canvas.width - radius * 2) + radius,
	y = Math.random() * (canvas.height - radius * 2) + radius,
	dx = (Math.random() - 0.5) * 1,
	dy = (Math.random() - 0.5) * 1;

	circleArray.push(new Circle(x, y, dx, dy, radius));
}

var circle = new Circle(125, 137, 5, 5, 31);
//circle.draw();



function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();