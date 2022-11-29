class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class newVector extends Vector {
  plus(x, y) {
    this.x += x;
    this.y += y;
    return this.x, this.y;
  }

  minus(x, y) {
    this.x -= x;
    this.y -= y;
    return this.x, this.y;
  }
}

const vecLength = Symbol("length");

Vector.prototype[vecLength] = function () {
  return Math.sqrt(Number(this.x * this.x + this.y * this.y));
};

Vector.prototype.checkArrow = () => this;

const v1 = new newVector(1, 1);
console.log(v1);
v1.plus(2, 2);
console.log(v1[vecLength]());
console.log(v1.checkArrow());
