import { Rage } from "rage"

let rage: Rage = new Rage("SI-canvas", 1280, 720)

export class Enemy {
  public scl: number
  public x: number
  public y: number


  public goDown: boolean

  constructor(x: number, y: number) {
    this.scl = 30
    this.x = x
    this.y = y

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

}
