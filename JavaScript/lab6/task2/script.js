class Point3D {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    print3DPoint() {
        return `3DPoint: X=${this.x}, Y=${this.y}, Z=${this.z}`
    }
    calculateDistance(p2) {

        return Math.sqrt(Math.pow(p2['x'] - this.x, 2) 
        + Math.pow(p2['y'] - this.y, 2) 
        + Math.pow(p2['z'] - this.z, 2))
    }
}

pointOne = new Point3D(0, 0, 0)
p2 = {
    'x': 2,
    'y': 3,
    'z': 4
}
console.log(pointOne.print3DPoint())
console.log(pointOne.calculateDistance(p2))