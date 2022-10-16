import { Rage } from "./rage";

let rage: Rage

const winWidth = 1280
const winHight = 720


const main = () => {
  rage = new Rage("pong-canvas", winWidth, winHight)
  rage.clearColor = "#202020"
  requestAnimationFrame(gameLoop)
}

const state = {
  isGameOver: false,
  p1score: 0,
  p2score: 0,
}

const ball = {
  x: (winWidth / 2) - 20,
  y: (winHight / 2) - 20,
  width: 40,
  height: 40,
  speedX: -175,
  speedY: 275,
}

const paddles = {
  P1X: 100,
  P1Y: (winHight / 2) - 50,
  P1Width: 30,
  P1Height: 100,
  P2X: winWidth - 100,
  P2Y: (winHight / 2) - 50,
  P2Width: 30,
  P2Height: 100,
  Speed: 200,
}

const gameLoop = () => {
  update()
  draw()
  requestAnimationFrame(gameLoop)
}

const update = () => {
  if (rage.isKeyDown("r")) {
    state.isGameOver = false
    ball.x = (winWidth / 2) - 20
    ball.y = (winHight / 2) - 20
    paddles.P1Y = (winHight / 2) - 50
    paddles.P2Y = (winHight / 2) - 50
  }

  if (state.isGameOver) {
    return
  }

  const dt = rage.getDT()

  //player1 / Left paddle

  if (rage.isKeyDown("a")) {
    paddles.P1Y -= paddles.Speed * dt
  }
  if (rage.isKeyDown("z")) {
    paddles.P1Y += paddles.Speed * dt
  }

  if (paddles.P1Y >= winHight - paddles.P1Height) {
    paddles.P1Y = winHight - paddles.P1Height
  } else if (paddles.P1Y <= 0) {
    paddles.P1Y = 0
  }

  if (rage.checkCollisionsRecs(paddles.P1X, paddles.P1Y, paddles.P1Width, paddles.P1Height, ball.x, ball.y, ball.width, ball.height)) {
    ball.x = paddles.P1X + paddles.P1Width + 1
    ball.speedX *= -1
  }

  if (ball.x <= 0) {
    state.p1score += 1
    state.isGameOver = true
  }

  //player2 / Right paddle

  if (rage.isKeyDown("k")) {
    paddles.P2Y -= paddles.Speed * dt
  }
  if (rage.isKeyDown("m")) {
    paddles.P2Y += paddles.Speed * dt
  }

  if (paddles.P2Y >= winHight - paddles.P2Height) {
    paddles.P2Y = winHight - paddles.P2Height
  } else if (paddles.P2Y <= 0) {
    paddles.P2Y = 0
  }

  if (rage.checkCollisionsRecs(paddles.P2X, paddles.P2Y, paddles.P2Width, paddles.P2Height, ball.x, ball.y, ball.width, ball.height)) {
    ball.x = paddles.P2X - paddles.P2Width - 9
    ball.speedX *= -1
  }

  if (ball.x >= winWidth - ball.width) {
    state.p2score += 1
    state.isGameOver = true
  }

  //Ball

  ball.x += ball.speedX * dt
  ball.y += ball.speedY * dt

  if (ball.y >= winHight - (ball.height)) {
    ball.y = winHight - ball.height
    ball.speedY *= -1
  }
  if (ball.y <= 0) {
    ball.y = 0
    ball.speedY *= -1
  }


}

const draw = () => {
  rage.clearScreen()
  rage.drawRect(ball.x, ball.y, ball.width, ball.height, "#FFFFFF")
  rage.drawRect(paddles.P1X, paddles.P1Y, paddles.P1Width, paddles.P1Height, "#FFFFFF")
  rage.drawRect(paddles.P2X, paddles.P2Y, paddles.P2Width, paddles.P2Height, "#FFFFFF")
  rage.drawText(winWidth / 2 - 100, 20, "#FFFFFF", 50, `${state.p1score}`)
  rage.drawText(winWidth / 2 + 50, 20, "#FFFFFF", 50, `${state.p2score}`)
}

addEventListener("DOMContentLoaded", main)
