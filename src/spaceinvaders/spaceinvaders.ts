import { Rage } from "rage";
import { Bullet } from "./bullet";
import { Enemy } from "./enemy"
import { UFO } from "./enemy"

let rage: Rage
let ufo: UFO
const enemys: Enemy[][] = []
const bullets: Bullet[][] = []

const winWidth = 1280
const winHight = 720

const totalEnemys = 50

const main = () => {
  rage = new Rage("SI-canvas", winWidth, winHight)
  ufo = new UFO()
  rage.clearColor = "#202020"

  for (let i = 0; i < totalEnemys / 10; i++) {
    enemys[i] = []
    bullets[i] = []
    for (let j = 0; j < 10; j++) {
      if (j === 0) {

        if (i === 0) {
          enemys[i][j] = new Enemy(60, 50 * i, 3)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else if (i == 1 || i === 2) {
          enemys[i][j] = new Enemy(60, 50 * i, 2)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else {
          enemys[i][j] = new Enemy(60, 50 * i, 1)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        }
      } else {
        if (i === 0) {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 3)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else if (i == 1 || i === 2) {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 2)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 1)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        }
      }
    }
  }
  requestAnimationFrame(gameLoop)
}

const state = {
  isGameOver: false,
  lives: 3,

  score: 0,

  enemysAlive: totalEnemys,
  enemyTick: 0,
  moveDirection: 17.5,
  tickRate: 0.5,
  shouldMoveDown: false,
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
  rage.drawText(10, 20, "white", 50, `Score: ${state.score}`)
  ufo.draw()

  for (let i = 0; i < enemys.length; i++) {
    for (let j = 0; j < enemys[i].length; j++) {
      bullets[i][j].draw()
      enemys[i][j].draw()
    }
  }
}


const update = () => {
  const dt = rage.getDT()

  if (state.lives <= 0) {
    state.isGameOver = true
  }

  if (rage.isKeyDown("r")) {
    restart()
  }

  if (state.isGameOver) {
    return
  }
  handleEnemyMovement(dt)

  enemyBulletMovement(dt)

  handleEnemyCollision()

  playerMovement(dt)

  handleBullet(dt)

  ufo.HandleUFO(dt)

  if (ufo.checkCollisions(player.BX, player.BY, player.BWidth, player.BHeight)) {
    ufo.x = -100
    ufo.y = -100
    state.score += 200
  }

  if (state.enemysAlive === 0) {
    state.enemysAlive = totalEnemys
    state.tickRate = state.enemysAlive * (0.5 / totalEnemys)
    state.moveDirection = 17.5
    state.shouldMoveDown = false
    enemyRefresh()
  }
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

let pointsToGive = 0
const handleEnemyCollision = () => {
  for (let i = 0; i < enemys.length; i++) {
    for (let j = 0; j < enemys[i].length; j++) {
      if (enemys[i][j].collision(player.BX, player.BY, player.BWidth, player.BHeight)) {
        pointsToGive = enemys[i][j].value
        enemys[i].splice(j, 1)
        player.BX = -100
        player.BY = 1000
        player.IsBulletOnScreen = false
        state.enemysAlive -= 1
        state.tickRate = state.enemysAlive * (0.5 / totalEnemys)
        state.score += pointsToGive
        break
      }
    }
  }
}

const handleEnemyMovement = (dt: number) => {
  state.enemyTick += dt
  if (state.enemyTick >= state.tickRate) {
    state.enemyTick = 0
    if (!enemys.length) {
      return
    }
    for (const enemyRow of enemys) {
      if (!enemyRow.length) {
        continue
      }
      if ((enemyRow[0].x <= 50 && state.moveDirection === -17.5) || (enemyRow[enemyRow.length - 1].x >= 1200 && state.moveDirection === 17.5)) {
        state.shouldMoveDown = true
        state.moveDirection *= -1
        break
      }
    }
    for (const enemyRow of enemys) {
      if (state.shouldMoveDown) {
        for (const enemy of enemyRow) {
          enemy.y += 50
        }
      }
      else {
        for (const enemy of enemyRow) {
          enemy.x += state.moveDirection
        }
      }
    }
    state.shouldMoveDown = false
  }
}


let EX = 0
let EY = 0
const enemyBulletMovement = (dt: number) => {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < bullets[i].length; j++) {
      if (!enemys.length && !enemys[i][j]) {
        continue
      }
      EX = enemys[i][j].x
      EY = enemys[enemys.length - 1][j].y
      bullets[i][j].handleMovement(dt, EX, EY)
    }
  }
}

const enemyRefresh = () => {
  for (let i = 0; i < totalEnemys / 10; i++) {
    enemys[i] = []
    bullets[i] = []
    for (let j = 0; j < 10; j++) {

      if (j === 0) {
        if (i === 0) {
          enemys[i][j] = new Enemy(60, 50 * i, 3)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else if (i == 1 || i === 2) {
          enemys[i][j] = new Enemy(60, 50 * i, 2)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else {
          enemys[i][j] = new Enemy(60, 50 * i, 1)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        }


      } else {

        if (i === 0) {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 3)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else if (i == 1 || i === 2) {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 2)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        } else {
          enemys[i][j] = new Enemy((j * 80) + 60, 50 * i, 1)
          enemys[i][j].y += 50
          bullets[i][j] = new Bullet()
        }
      }
    }
  }
}

const restart = () => {
  player.x = winWidth / 2 - 25,
    player.y = winHight - 100,
    player.IsBulletOnScreen = false
  state.isGameOver = false
  state.tickRate = 0.5
  state.enemysAlive = totalEnemys
  state.score = 0
  state.lives = 3
  state.moveDirection = 17.5

  enemyRefresh()
}

addEventListener("DOMContentLoaded", main)
