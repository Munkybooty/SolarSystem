/**
 * @fileoverview Represents a Planet Object with a certain mass, aphelion and perihelion distance,
 * orbital velocity, and radius. Planet.js has a number of methods that can be called on Planet objects
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.3
 */
//Constants
let G = 6.67408e-11 //m^3 kg-1 s-2
let maxR = 696.34e6; // m
let minR = 1.1883e6; // m
let minY = -7.37593e12; // m
let maxY = 7.37593e12; // m
let minX = -7.37593e12; // m
let maxX = 7.37593e12; // m

class Planet {
    constructor(mass, perDist, apDist, vel, size, texture) {
        this.mass = mass;
        this.apDist = apDist;
        this.perDist = perDist;
        this.vy = vel;
        this.vx = 0;
        this.x = (perDist+apDist)/2;
        this.y = 0;
        this.size = size;
        this.texture = texture;
        this.ax = 0;
        this.ay = 0;
    }
    posNegX(ox) {
        let distBTWNX = this.x - ox;
        return -1;
    }

    posNegY(oy) {
        let distBTWNY = this.y - oy;
        return -1;
    }

    distBTWN(ox, oy) {
         let distBTWNX = this.x - ox;
         let distBTWNY = this.y - oy;
         let distBTWNR = Math.sqrt(distBTWNX**2 + distBTWNY**2);
         return distBTWNR**3;
    }
    accelerationX(p1,p2,p3,p4,p5,p6,p7,p8,p9) {
         return (G*p1.mass*(this.posNegX(p1.x))*this.x/(this.distBTWN(p1.x,p1.y))) + (G*p2.mass*(this.posNegX(p2.x))*this.x/(this.distBTWN(p2.x,p2.y)))
         + (G*p3.mass*(this.posNegX(p3.x))*this.x/(this.distBTWN(p3.x,p3.y))) + (G*p4.mass*(this.posNegX(p4.x))*this.x/(this.distBTWN(p4.x,p4.y)))
         + (G*p5.mass*(this.posNegX(p5.x))*this.x/(this.distBTWN(p5.x,p5.y))) + (G*p6.mass*(this.posNegX(p6.x))*this.x/(this.distBTWN(p6.x,p6.y)))
         + (G*p7.mass*(this.posNegX(p7.x))*this.x/(this.distBTWN(p7.x,p7.y))) + (G*p8.mass*(this.posNegX(p8.x))*this.x/(this.distBTWN(p8.x,p8.y)))
         + (G*p9.mass*(this.posNegX(p9.x))*this.x/(this.distBTWN(p9.x,p9.y)));
    }

    accelerationY(p1,p2,p3,p4,p5,p6,p7,p8,p9) {
         return (G*p1.mass*(this.posNegY(p1.y))*this.y/(this.distBTWN(p1.x,p1.y))) + (G*p2.mass*(this.posNegY(p2.y))*this.y/(this.distBTWN(p2.x,p2.y)))
         + (G*p3.mass*(this.posNegY(p3.y))*this.y/(this.distBTWN(p3.x,p3.y))) + (G*p4.mass*(this.posNegY(p4.y))*this.y/(this.distBTWN(p4.x,p4.y)))
         + (G*p5.mass*(this.posNegY(p5.y))*this.y/(this.distBTWN(p5.x,p5.y))) + (G*p6.mass*(this.posNegY(p6.y))*this.y/(this.distBTWN(p6.x,p6.y)))
         + (G*p7.mass*(this.posNegY(p7.y))*this.y/(this.distBTWN(p7.x,p7.y))) + (G*p8.mass*(this.posNegY(p8.y))*this.y/(this.distBTWN(p8.x,p8.y)))
         + (G*p9.mass*(this.posNegY(p9.y))*this.y/(this.distBTWN(p9.x,p9.y)));
    }
    Px() {
        return 2000*(this.x-minX)/(maxX-minX) - 1000;
    }

    Pz() {
        return 1600*(maxY-this.y)/(maxY-minY) - 800;
    }

    Pr() {
        return 3*(this.size -minR)/(maxR-minR) + 1;
    }

}
