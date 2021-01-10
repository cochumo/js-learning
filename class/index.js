'use strict'

// クラス
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

// 継承
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

// 静的メソッド
class Static {
  static Distance(x, y) {
    return x + y
  }
}

console.log({
  distance: Static.Distance(100, 30),
})

// プライベートメンバーとgetter, setter
const propWidth = Symbol()
const propHeight = Symbol()

class Polygon {
  constructor(width, height) {
    this[propWidth] = width
    this[propHeight] = height
  }

  area() {
    return this[propWidth] * this[propHeight]
  }

  get Height() {
    return this[propHeight]
  }
  set Height(value) {
    this[propHeight] = value
  }
  get Width() {
    return this[propWidth]
  }
  set Width(value) {
    this[propWidth] = value
  }
}

let polygon = new Polygon(2, 5)
console.log({
  polygon: {
    width: polygon.Width,
    height: polygon.Height,
    area: polygon.area(),
  },
})

// set width and height
polygon.Width = 3
polygon.Height = 6
console.log({
  polygon: {
    width: polygon.Width,
    height: polygon.Height,
    area: polygon.area(),
  },
})

// メソッドのオーバーライド
class Modal extends Square {
  constructor(width, height) {
    super(width, height)
  }

  area() {
    return Number.isFinite(this.width) && Number.isFinite(this.height)
      ? super.area()
      : 'widthまたはheightがNumberではなかったのでオーバライドしました。'
  }
}

let modalDisplayImage = new Modal(250, 300)
console.log({
  modalDisplayImage: {
    width: modalDisplayImage.width,
    height: modalDisplayImage.height,
    area: modalDisplayImage.area(),
  },
})
modalDisplayImage.width = 'text'
console.log({
  modalDisplayImage: {
    width: modalDisplayImage.width,
    height: modalDisplayImage.height,
    area: modalDisplayImage.area(),
  },
})
