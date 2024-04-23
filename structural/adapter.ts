// https://refactoring.guru/design-patterns/adapter

interface IRoundPeg {
  getRadius: () => number;
}

interface ISquarePeg {
  getWidth: () => number;
}

class RoundHole {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: IRoundPeg): boolean {
    return this.getRadius() >= peg.getRadius();
  }
}

class RoundPeg implements IRoundPeg {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

class SquarePeg implements ISquarePeg {
  constructor(private width: number) {}

  getWidth(): number {
    return this.width;
  }
}

class SquarePegAdapter implements IRoundPeg {
  constructor(private squarePeg: SquarePeg) {}

  getRadius(): number {
    return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
  }
}

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(6);
const squarePeg = new SquarePeg(7);
const squarePegAdapter = new SquarePegAdapter(squarePeg);

console.log(hole.fits(roundPeg));
console.log(hole.fits(squarePegAdapter));
