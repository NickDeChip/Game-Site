import { Rage } from "rage"

let rage: Rage = new Rage("SI-canvas", 1280, 720)

export class Enemy {
  public scl: number
  public x: number
  public y: number
  public colour: string
  public enemyType: number

  public goDown: boolean

  public value: number

  constructor(x: number, y: number, enemyType: number) {
    this.scl = 30
    this.x = x
    this.y = y
    this.colour = "#00FF00"
    this.enemyType = enemyType

    this.goDown = false

    this.value = 10 * enemyType
  }

  public draw() {
    if (this.enemyType === 1) {
      this.colour = "#00FF00"
    } else if (this.enemyType === 2) {
      this.colour = "#0000FF"
    } else if (this.enemyType === 3) {
      this.colour = "#FF0000"
    }
    rage.drawRect(this.x, this.y, this.scl, this.scl, this.colour)
  }

  public collision(x: number, y: number, width: number, hight: number): boolean {
    if (rage.checkCollisionsRecs(this.x, this.y, this.scl, this.scl, x, y, width, hight)) {
      return true
    } else {
      return false
    }
  }

}
