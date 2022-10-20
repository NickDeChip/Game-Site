import { Rage } from "rage";
import { Enemy } from "./spaceinvaders/enemy"

let rage: Rage

const winWidth = 1280
const winHight = 720

const enemys: Enemy[] = []

const main = () => {
  rage = new Rage("SI-canvas", winWidth, winHight)
  rage.clearColor = "#202020"

  for (let i = 0; i < 13; i++) {
    enemys[i] = new Enemy(i * 60, 100)
  }

  requestAnimationFrame(gameLoop)
}

const player = {
  x: winWidth / 2 - 25,
  y: winHight - 100,
  width: 50,
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
  rage.drawRect(player.BX, 100, player.BWidth, player.BHeight, "white")

  for (let i = 0; i < enemys.length; i++) {
    enemys[i].draw()
  }

}


const update = () => {
  const dt = rage.getDT()

  playerMovement(dt)

  handleBullet(dt)

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

  player.BY -= 400 * dt

  if (player.BY <= 0) {
    player.BX = -100
    player.BY = 1000
    player.IsBulletOnScreen = false
  }

  if (player.BX >= 0) {
    player.IsBulletOnScreen = true
  }

  if (rage.isKeyDown("s") && !player.IsBulletOnScreen) {
    player.BX = player.x
    player.BY = player.y
  }

}


addEventListener("DOMContentLoaded", main)
