import { Rage } from "rage";
import * as Vec2D from "vector2d"

let rage: Rage

const winWidth = 1280
const winHight = 720

enum direction {
  up = 1,
  down,
  left,
  right,
}

const main = () => {
  rage = new Rage("snake-canvas", winWidth, winHight)
  rage.clearColor = "#202020"
  requestAnimationFrame(gameLoop)
}

const state = {
  score: 0,
  isGameOver: false
}

const snake = {
  x: winWidth / 2,
  y: winHight / 2,
  width: 40,
  height: 40,
  tick: 0,
  tickspeed: 7,
  speed: 40,
  total: 0,
  tail: [],
  direction: direction.left,
  nextDirection: direction.left
}

const fruit = {
  x: Math.floor(Math.random() * 32) * 40,
  y: Math.floor(Math.random() * 18) * 40,
  width: 40,
  height: 40,
  tick: 0,
}

const gameLoop = () => {
  update()
  draw()
  requestAnimationFrame(gameLoop)
}


const draw = () => {
  rage.clearScreen()

  rage.drawRect(snake.x, snake.y, snake.width, snake.height, "#330000")

  rage.drawRect(fruit.x, fruit.y, fruit.width, fruit.height, "green")

  for (let i = 0; i < snake.tail.length; i++) {
    if (snake.tail[i])
      rage.drawRect(snake.tail[i].x, snake.tail[i].y, snake.width, snake.height, "#490000")
  }

  rage.drawText(winWidth / 2, 10, "white", 40, `${state.score}`)

}

const update = () => {
  const dt = rage.getDT()

  if (snake.tickspeed >= 15) { snake.tickspeed = 15 }

  snake.tick += snake.tickspeed * dt
  fruit.tick += 1 * dt

  if (rage.isKeyDown("r")) {
    state.isGameOver = false
    snake.x = winWidth / 2
    snake.y = winHight / 2
    fruit.x = Math.floor(Math.random() * 32) * 40
    fruit.y = Math.floor(Math.random() * 18) * 40
    snake.total = 0
    snake.tail.length = 0
    state.score = 0
  }

  if (state.isGameOver) {
    return
  }

  for (let i = 0; i < snake.tail.length; i++) {
    if (rage.checkCollisionsRecs(snake.tail[i].x, snake.tail[i].y, snake.width, snake.height, snake.x, snake.y, snake.width, snake.height)) {
      state.isGameOver = true
    }
  }


  snakeMovement()
  snakeWallPassThrough()

  fruitSpawn()

}

const fruitSpawn = () => {
  if (fruit.tick >= 20) {
    fruit.tick = 0
    fruit.x = Math.floor(Math.random() * 32) * 40
    fruit.y = Math.floor(Math.random() * 18) * 40
  }

  if (rage.checkCollisionsRecs(snake.x, snake.y, snake.width, snake.height, fruit.x, fruit.y, fruit.width, fruit.height)) {
    fruit.tick = 0
    snake.total++
    snake.tickspeed += 0.2
    state.score++
    fruit.x = Math.floor(Math.random() * 32) * 40
    fruit.y = Math.floor(Math.random() * 18) * 40
  }
}

const snakeMovement = () => {
  if (rage.isKeyDown("w") && snake.direction != direction.down) {
    snake.nextDirection = direction.up
  }
  if (rage.isKeyDown("s") && snake.direction != direction.up) {
    snake.nextDirection = direction.down
  }
  if (rage.isKeyDown("a") && snake.direction != direction.right) {
    snake.nextDirection = direction.left

  }
  if (rage.isKeyDown("d") && snake.direction != direction.left) {
    snake.nextDirection = direction.right
  }

  if (snake.tick >= 1) {
    snake.tick = 0

    for (let i = 0; i < snake.tail.length - 1; i++) {
      snake.tail[i] = snake.tail[i + 1]
    }
    if (snake.total >= 1) {
      snake.tail[snake.total - 1] = new Vec2D.Vector(snake.x, snake.y)
    }

    snake.direction = snake.nextDirection

    switch (snake.direction) {
      case direction.up:
        snake.y -= snake.speed
        break
      case direction.down:
        snake.y += snake.speed
        break
      case direction.left:
        snake.x -= snake.speed
        break
      case direction.right:
        snake.x += snake.speed
        break
    }
  }
}

const snakeWallPassThrough = () => {
  if (snake.x >= winWidth) {
    snake.x = 0
  } else if (snake.x < 0) {
    snake.x = winWidth - snake.width
  }
  if (snake.y >= winHight) {
    snake.y = 0
  } else if (snake.y < 0) {
    snake.y = winHight - snake.height
  }

}


addEventListener("DOMContentLoaded", main)
