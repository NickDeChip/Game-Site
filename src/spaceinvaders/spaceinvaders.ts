import { Rage } from "rage";

let rage: Rage

const winWidth = 1280
const winHight = 720

const enemys = []

const main = () => {
  rage = new Rage("SI-canvas", winWidth, winHight)
  rage.clearColor = "#202020"

  for (let i = 0; i > 12; i++) {
    enemys[i] = new enemy(i * 30, 100)
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


  for (let i = 0; i > enemys.length; i++) {
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

class enemy {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public draw() {
    rage.drawRect(this.x, this.y, 30, 30, "#DD00DD")
  }
}

addEventListener("DOMContentLoaded", main)
