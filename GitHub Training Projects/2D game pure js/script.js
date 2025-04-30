const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let paddleX = (canvas.width - paddleWidth) / 2;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 3;
let dy = -3;
let rightPressed = false;
let leftPressed = false;
let interval = 0;
let ballColor = "#0095DD"
let bricks = [];
let score = 0;
let lives = 2;
let isGameRunning = false;

// Init bricks

function initBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
}

initBricks();

// Input handlers
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX - paddleWidth / 2 >= 0 && relativeX + paddleWidth / 2 <= canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    } else if (relativeX - paddleWidth / 2 < 0) {
      paddleX = 0;
    } else if (relativeX + paddleWidth / 2 > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  }

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
    const b = bricks[c][r];
    if (b.status === 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}


// Drawing functions
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score ${score}`, 8, 20)
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}


// Changes the color of the ball each time it hits a wall
//function randomColor() {
 //return '#' + Math.floor(Math.random() * 16777215).toString(16);
//}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  
  // Ball movement and collision
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    //ballColor = randomColor();
  }
  if (y + dy < ballRadius) {
    dy = -dy;
    //ballColor = randomColor();
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    } else {
      lives--;
        if (!lives) {
          alert("GAME OVER");
          document.location.reload();
      } else {
        // Reset ball and paddle
        alert("Try again!");
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
      // Paddle movement
      if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
      } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
      }
        x += dx;
        y += dy;

        requestAnimationFrame(draw);
  }


  // Start game
  function startGame() {
    if (!isGameRunning) {
      isGameRunning = true;
      requestAnimationFrame(draw);
    }
  }


  document.getElementById("runButton").addEventListener("click", function () {
      this.disabled = true;
      startGame()
    });
  