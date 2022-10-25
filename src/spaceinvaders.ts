import { Rage } from "rage";
import { Enemy } from "./spaceinvaders/enemy"

let rage: Rage

const winWidth = 1280
const winHight = 720

const enemys: Enemy[][] = []

const main = () => {
  rage = new Rage("SI-canvas", winWidth, winHight)
  rage.clearColor = "#202020"

  for (let i = 0; i < 4; i++) {
    enemys[i] = []
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        enemys[i][j] = new Enemy(60, 50 * i)
      } else {
        enemys[i][j] = new Enemy((j * 80) + 60, 50 * i)
      }
    }
  }

  requestAnimationFrame(gameLoop)
}

const state = {
  isGameOver: false,
  enemysAlive: 40,
}

const player = {
  x: winWidth / 2 - 25,
  y: winHight - 100,
  width: 40,
  height: 40,
  IsBulletOnScreen: false,
  BX: -100,
  BY: 1000,
  BWidth: 10,
  BHeight: 15,
}

const gameLoop = () => {
  update()
  draw()
  requestAnimationFrame(gameLoop)
}

const draw = () => {
  rage.clearScreen()
  rage.drawRect(player.x, player.y, player.width, player.height, "white")
  rage.drawRect(player.BX, player.BY, player.BWidth, player.BHeight, "white")

  for (let i = 0; i < enemys.length; i++) {
    for (let j = 0; j < enemys[i].length; j++) {
      enemys[i][j].draw()
      enemys[i][j].drawBullets()
    }
  }
}


const update = () => {
  const dt = rage.getDT()

  if (rage.isKeyDown("r")) {
    restart()
  }

  if (state.isGameOver) {
    return
  }

  playerMovement(dt)

  handleBullet(dt)

  handleEnemyCollision()

  handleEnemyMovement(dt)

  //handleEnemyBullets(dt)
}

const playerMovement = (dt: number) => {

  if (rage.isKeyDown("a")) {
    player.x -= 200 * dt
  }
  if (rage.isKeyDown("d")) {
    player.x += 200 * dt
  }

  if (player.x > winWidth) {
    player.x = -25
  }
  if (player.x < -25) {
    player.x = winWidth
  }

}

const handleBullet = (dt: number) => {

  player.BY -= 700 * dt

  if (player.BY <= 0) {
    player.BX = -100
    player.BY = 1000
    player.IsBulletOnScreen = false
  }

  if (player.BX >= 0) {
    player.IsBulletOnScreen = true
  }

  if (rage.isKeyDown("s") && !player.IsBulletOnScreen) {
    player.BX = player.x + 20
    player.BY = player.y
  }

}

const handleEnemyCollision = () => {
  for (let i = 0; i < enemys.length; i++) {
    for (let j = 0; j < enemys[i].length; j++) {
      if (enemys[i][j].collision(player.BX, player.BY, player.BWidth, player.BHeight)) {
        enemys[i].splice(j, 1)
        player.BX = -100
        player.BY = 1000
        player.IsBulletOnScreen = false
        state.enemysAlive -= 1
        tickRate = state.enemysAlive * 0.0125
        console.log(tickRate)
        break
      }
    }
  }
}

let enemyTick = 0
let moveDirection = 17.5
let tickRate = 0.5
let shouldMoveDown = false
const handleEnemyMovement = (dt: number) => {
  enemyTick += dt
  if (enemyTick >= tickRate) {
    enemyTick = 0
    if (!enemys.length) {
      return
    }
    for (const enemyRow of enemys) {
      if (!enemyRow.length) {
        continue
      }
      if ((enemyRow[0].x <= 50 && moveDirection === -17.5) || (enemyRow[enemyRow.length - 1].x >= 1200 && moveDirection === 17.5)) {
        shouldMoveDown = true
        moveDirection *= -1
        break
      }
    }
    for (const enemyRow of enemys) {
      if (shouldMoveDown) {
        for (const enemy of enemyRow) {
          enemy.y += 50
        }
      }
      else {
        for (const enemy of enemyRow) {
          enemy.x += moveDirection
        }
      }
    }
    shouldMoveDown = false
  }
}

const handleEnemyBullets = (dt: number) => {
  for (let i = 0; i < enemys.length; i++) {
    for (let j = 0; j < enemys[i].length; j++) {
      enemys[i][j].handleEnemyBullets(dt, player.x, player.y, player.width, player.height)
      if (enemys[i][j].bulletCollision(player.x, player.y, player.width, player.height)) {
        state.isGameOver = true
      }
    }
  }
}

const restart = () => {
  player.x = winWidth / 2 - 25,
    player.y = winHight - 100,
    player.IsBulletOnScreen = false
  state.isGameOver = false
  tickRate = 0.5
  state.enemysAlive = 40

  enemys.splice(0, 100)

  for (let i = 0; i < 4; i++) {
    enemys[i] = []
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        enemys[i][j] = new Enemy(60, 100)
      } else {
        enemys[i][j] = new Enemy((i * 80) + 60, 100)
      }
    }
  }
}

addEventListener("DOMContentLoaded", main)
