import { Rage } from "rage"

let rage: Rage = new Rage("SI-canvas", 1280, 720)

export class Enemy {
  private x: number
  private y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public draw() {
    rage.drawRect(this.x, this.y, 30, 30, "#DD00DD")
  }
}
