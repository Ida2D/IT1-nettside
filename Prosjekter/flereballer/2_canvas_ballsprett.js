
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500
canvas.height = 500





ball1 = {
    x: 50, 
    y: 50,
    radius: 30,
    x_velocity: 5,
    y_velocity: 3, 
}

ball2 = {
    x: 50, 
    y: 50,
    radius: 10,
    x_velocity: 12,
    y_velocity: 7, 
}

ball3 = {
    x: 50, 
    y: 50,
    radius: 15,
    x_velocity: 10,
    y_velocity: 6, 
}

function flyttBall(ball) {
    ball.x += ball.x_velocity
    ball.y += ball.y_velocity
    if (ball.x > canvas.width - ball.radius || ball.x < ball.radius) {
        ball.x_velocity = - ball.x_velocity
    }
    if (ball.y > canvas.height - ball.radius || ball.y < ball.radius) {
        ball.y_velocity = - ball.y_velocity
    }
}

function tegnBall(ball) {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.closePath()
}

function tegn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    flyttBall(ball1)
    flyttBall(ball2)
    flyttBall(ball3)
    tegnBall(ball1)
    tegnBall(ball2)
    tegnBall(ball3)
    requestAnimationFrame(tegn)
}
tegn()

//sjekk for kollisjon
function collission(ball1, ball2, ball3) {
    
}





//KNAPPER-----------------------------//
function scrollToProsjektCanvas() {
    document.querySelector('#prosjektCanvas').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}

/*--scrollefunksjoner ---------*/
function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}