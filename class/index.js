'use strict'

class Square {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }
}

let header = new Square(1060, 120)
console.log({
  header: {
    width: header.width,
    height: header.height,
    area: header.area(),
  },
})

class Title extends Square {
  constructor(width, height) {
    super(width, height)
  }

  titleArea() {
    return super.area() * 0.5
  }
}

let footer = new Title(1060, 80)
console.log({
  footer: {
    width: footer.width,
    height: footer.height,
    area: footer.area(),
    titleArea: footer.titleArea(),
  },
})
