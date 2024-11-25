/*
If we want to add more color formats in the future, we can do so by adding more classes that extend the Color class.
For example, we could add a BRGBColor class that extends the Color class and implements the toString() method and then add a ColorFactory class that creates the correct color object based on the format.
*/

class Color {
  toString() {
    throw new Error('toString() must be implemented');
  }
}

class RGBColor extends Color {
  constructor(r, g, b) {
    super();
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

class HSLColor extends Color {
  constructor(h, s, l) {
    super();
    this.h = h;
    this.s = s;
    this.l = l;
  }
  
  toString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}

class ColorFactory {
  static createColor(data) {
    switch (data.format) {
      case 'rgb':
        const { r, g, b } = data.value;
        return new RGBColor(r, g, b);
      case 'hsl':
        const { h, s, l } = data.value;
        return new HSLColor(h, s, l);
      default:
        throw new Error(`Unsupported color format: ${data.format}`);
    }
  }
} 

export { ColorFactory };
