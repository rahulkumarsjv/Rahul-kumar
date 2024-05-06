// setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(effect, i){
        this.effect = effect;
        this.index = i;
        this.radius = Math.floor(Math.random() * 25 + 2);
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.pushX = 0;
        this.pushY = 0;
        this.friction = Math.random() * 0.4 + 0.2;
        this.color = 'hsl(' + (Math.random() * 150 + 200) + ', 100%, 50%)';
        //this.color = 'hsl(' + 250 + ', 100%, 50%)';
    }
    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.2, this.radius * 0.5, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(this.x + this.radius * 0.5, this.y - this.radius * 0.4, this.radius * 0.2, 0, Math.PI * 2);
        context.fill();
        //context.stroke();
    }
    update(){
        // mouse interactions
        if (this.effect.mouse.pressed){
            const dx = this.x - this.effect.mouse.x;
            const dy = this.y - this.effect.mouse.y;
            const distance = Math.hypot(dx, dy);
            const force = (this.effect.mouse.radius / distance);
            if (distance < this.effect.mouse.radius){
                const angle = Math.atan2(dy, dx);
                this.pushX += Math.cos(angle) * force;
                this.pushY += Math.sin(angle) * force;
            }
        }

        // collision with other particles
        this.effect.particles.forEach(particle => {
            if (particle.index != this.index){
                const dx = this.x - particle.x;
                const dy = this.y - particle.y;
                const distance = Math.hypot(dy, dx);
                const sumOfRadii = particle.radius + this.radius;
                if (distance <= sumOfRadii){
                    const unit_x = dx / distance;
                    const unit_y = dy / distance;
                    this.x = particle.x + (sumOfRadii + 0.1) * unit_x;
                    this.y = particle.y + (sumOfRadii + 0.1) * unit_y;
                }
            }
        });

        // boundaries
        if (this.x < this.radius){
            this.x = this.radius;
            this.vx *= -1;
        } else if (this.x > this.effect.width - this.radius){
            this.x = this.effect.width - this.radius;
            this.vx *= -1;
        }
        if (this.y < this.radius){
            this.y = this.radius;
            this.vy *= -1;
        } else if (this.y > this.effect.height - this.radius){
            this.y = this.effect.height - this.radius;
            this.vy *= -1;
        }

        this.x += (this.pushX *= this.friction) + this.vx;
        this.y += (this.pushY *= this.friction) + this.vy;
    }
    reset(){
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
    }
}

class Effect {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 100;
        this.createParticles();

        this.mouse = {
            x: 0,
            y: 0,
            pressed: false,
            radius: 150
        }

        window.addEventListener('resize', e => {
            this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
        });
        window.addEventListener('mousemove', e => {
            if (this.mouse.pressed){
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            }
        });
        window.addEventListener('mousedown', e => {
            this.mouse.pressed = true;
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseup', e => {
            this.mouse.pressed = false;
        });
    }
    createParticles(){
        for (let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this, i));
        }
    }
    handleParticles(context){
        this.connectParticles(context);
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }
    connectParticles(context){
        const maxDistance = 120;
        for (let a = 0; a < this.particles.length; a++){
            for (let b = a; b < this.particles.length; b++){
                const dx = this.particles[a].x - this.particles[b].x;
                const dy = this.particles[a].y - this.particles[b].y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance){
                    context.save();
                    const opacity = 1 - (distance/maxDistance);
                    context.strokeStyle = this.particles[a].color;
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[a].x, this.particles[a].y);
                    context.lineTo(this.particles[b].x, this.particles[b].y);
                    context.stroke();
                    context.restore();
                }
            }
        }
    }
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.particles.forEach(particle => {
            particle.reset();
        });
    }
}
const effect = new Effect(canvas, ctx);

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();

const video = document.querySelector('.videoplayer');
const rangeInput = document.getElementById('range');
const rangeInput1 = document.getElementById('range1');
const volumeDisplay = document.getElementById('voiumedisplay');
const speedSelect = document.getElementById('speedSelect');
const mintElement = document.querySelector('.mint');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

rangeInput.addEventListener('input', function() {
    video.volume = parseFloat(rangeInput.value / 100);
    volumeDisplay.textContent = rangeInput.value;
});

function changeSpeed() {
    video.playbackRate = parseFloat(speedSelect.value);
}

video.addEventListener('timeupdate', function() {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progress = (currentTime / duration) * 100;
    rangeInput1.value = progress;
});

rangeInput1.addEventListener('input', function() {
    const progress = rangeInput1.value;
    const duration = video.duration;
    video.currentTime = (progress / 100) * duration;
});

video.addEventListener('loadedmetadata', function() {
    const duration = video.duration;
    const minutes = Math.floor(duration / 60);
    mintElement.textContent = `Duration: ${minutes} mins`;
});

video.addEventListener('ended', function() {
    rangeInput1.value = 100;
});

window.onload = function() {
    video.focus();
};

window.onload = function() {
    video.focus();
};

window.onload = function() {
    video.focus();
};

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});
let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Display the requested slide
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }
  
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  showSlide(--slideIndex);
}

// Show the first slide when the page loads
showSlide(slideIndex);





