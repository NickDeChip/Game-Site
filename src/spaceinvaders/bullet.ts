import { Rage } from "rage"

let rage: Rage = new Rage("SI-canvas", 1280, 720)

export class Bullet {
  private BSpeed: number
  public BTick: number
  public x: number
  public y: number
  private width: number
  private height: number
  private colour: string

  private rand: number

  private isOnScreen: boolean

  private restartPos: boolean


  constructor() {
    this.BSpeed = 300
    this.BTick = 0
    this.x = -1000
    this.y = 10000
    this.width = 5
    this.height = 7.5
    this.colour = "#770F77"

    this.rand = Math.floor(Math.random() * 10)

    this.isOnScreen = false

    this.restartPos = true


  }


  public handleMovement(dt: number, EX: number, EY: number) {
    this.BTick += dt

    //if (this.BTick >= 0.2) {
    this.rand = Math.floor(Math.random() * 500)
    this.BTick = 0
    //}

    if (this.rand === 5 && !this.isOnScreen) {
      this.x = EX + 15
      this.y = EY + 25
    }

    if (this.y > 1280) {
      this.isOnScreen = false
      this.restartPos = true
    }

    if (this.y < 1280) {
      this.isOnScreen = true
    }

    if (this.restartPos) {
      this.restartPos = false
      this.x = -1000
      this.y = 10000
    }

    this.y += this.BSpeed * dt
  }

  public draw() {
    rage.drawRect(this.x, this.y, this.width, this.height, this.colour)
  }

}
