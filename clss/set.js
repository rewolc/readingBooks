class Group {
  constructor(arr) {
    this.arr = (() => {
      let result = [];
      arr.map((el) => (result.indexOf(el) !== -1 ? el : result.push(el)));
      return result;
    })();
  }

  set(el) {
    if (this.arr.indexOf(el) !== -1) {
      console.error("Element already exists in the set");
      return;
    }
    this.arr.push(el);
    return this.arr;
  }

  delete(el) {
    if (this.arr.indexOf(el) === -1) {
      console.error("Element does not exist in the set");
      return;
    }
    this.arr.splice(this.arr.indexOf(el), 1);
    return this.arr;
  }

  has(el) {
    if (this.arr.indexOf(el) !== -1) {
      return true;
    }
    return false;
  }
}

const a = [1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 5, 5, 6, 6, 6];

const setA = new Group(a);

console.log(setA);

console.log(setA.delete(1));
console.log(setA.set(1));
console.log(setA.has(1));
