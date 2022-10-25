import { Rage } from "rage"

let rage: Rage = new Rage("SI-canvas", 1280, 720)

export class Enemy {
  public scl: number
  public x: number
  public y: number

  public moveDirection: number
  private moveTick: number
  private hasdropped: boolean

  private BSpeed: number
  private BTick: number
  private BX: number
  private BY: number
  private BW: number
  private BH: number
  private BC: string

  private Onstart: boolean

  public goDown: boolean

  constructor(x: number, y: number) {
    this.scl = 30
    this.x = x
    this.y = y

    this.moveDirection = 17.5
    this.moveTick = 0
    this.hasdropped = false

    this.BSpeed = 500
    this.BTick = 0
    this.BX = 0
    this.BY = 0
    this.BW = 5
    this.BH = 7.5
    this.BC = "#CC0ACC"

    this.Onstart = false

    this.goDown = false
  }

  public draw() {
    rage.drawRect(this.x, this.y, this.scl, this.scl, "#00FF00")
  }

  public collision(x: number, y: number, width: number, hight: number): boolean {
    if (rage.checkCollisionsRecs(this.x, this.y, this.scl, this.scl, x, y, width, hight)) {
      return true
    } else {
      return false
    }
  }

  public bulletCollision(x: number, y: number, width: number, hight: number): boolean {
    if (rage.checkCollisionsRecs(this.BX, this.BY, this.BW, this.BH, x, y, width, hight)) {
      return true
    } else {
      return false
    }
  }

  public handleEnemyBullets(dt: number, x: number, y: number, w: number, h: number) {
    this.BY += this.BSpeed * dt
    this.BTick += .25 * dt

    if (!this.Onstart) {
      this.BY = this.y + this.scl
      this.BX = this.x + 20
      this.Onstart = true
    }

    if (rage.checkCollisionsRecs(x, y, w, h, this.BX, this.BY, this.BW, this.BH) && this.BTick >= 1) {
      this.BY = this.y
      this.BX = this.x
    }

    if (this.BY >= 720 && this.BTick >= 1) {
      this.BY = this.y
      this.BX = this.x
      this.BTick = 0
    }

  }

  public drawBullets() {
    rage.drawRect(this.BX, this.BY, this.BW, this.BH, this.BC)
  }
}
