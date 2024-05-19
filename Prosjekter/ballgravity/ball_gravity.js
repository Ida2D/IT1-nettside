const ballElement = document.getElementById("ball")
const frameWidth = 500
const frameHeight = 400
const gravity = -0.5
let ball = {
    size: 100,
    x: 0,
    y: 0,
    x_velocity: 5,
    y_velocity: 10,
    y_start_velocity: 10

}


function flyttBall() {
    ball.y_velocity += gravity
    ball.x += ball.x_velocity
    ball.y += ball.y_velocity
    ballElement.style.left = ball.x + "px"
    ballElement.style.bottom = ball.y + "px"
    if (ball.x > frameWidth - ball.size || ball.x < 0) {
        ball.x_velocity = -ball.x_velocity
    }
    if (ball.y < 0) {
        ball.y = 0
        ball.y_velocity = ball.y_start_velocity
    }
    if (ball.y > frameHeight) {
        ball.y_velocity = -ball.y_velocity
    }

}

setInterval(flyttBall, 20)


//KNAPPER-----------------------------//
function scrollToProsjektGravity() {
    document.querySelector('#prosjektGravity').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}

/*--scrollefunksjoner ---------*/
function scrollToCode() {
    document.querySelector('#koden').scrollIntoView({ behavior: 'smooth' });
}