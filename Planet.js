/**
 * @fileoverview Represents a Planet Object with a certain mass, aphelion and perihelion distance,
 * orbital velocity, and radius. Planet.js has a number of methods that can be called on Planet objects
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.0.0
 */
// Constants
let G = 6.67408e-11 //m^3 kg-1 s-2
let maxR = 696.34e6;
let minR = 1.1883e6;
let minY = -7.37593e12;
let maxY = 7.37593e12;
let minX = -7.37593e12;
let maxX = 7.37593e12;
/** @class */
class Planet {
  /** @constructor */
  constructor(mass, perDist, apDist, vel, size, color) {
    this.mass = mass;
    this.apDist = apDist;
    this.perDist = perDist;
    this.vel = vel;
    this.rad = (this.apDist + this.perDist) / 2;
    this.x = this.rad
    this.y = 0;
    this.size = size;
    this.color = color;
  }
  /**
   * Calculates the distance between plantes
   * @param {float} ox Second planet's radius
   * @param {float} oy Second planet's y coordinate
   * @returns the distance between planets
   */
  dist(ox, oy) {
    let distBTWNX = this.x - ox;
    let distBTWNY = this.y - oy;
    let distBTWNR = Math.sqrt(distBTWNX**2 + distBTWNY**2);
    return distBTWNR;
  }
  /**
   * Calculates the cubed distance between planets
   * @param {float} ox Second planet's radius
   * @param {float} oy Second planet's y coordinate
   * @returns cubed distance
   */
  distBTWN(ox, oy) {
    return (this.dist(ox, oy))**3;
  }
  /**
   * Calculates acceleration due to gravity of other planets
   * @param {float} ox Second planet's radius
   * @param {float} oy Second planet's y coordinate
   * @returns acceleration
   */
  acc(ox, oy) {
    return G*this.mass*this.x/(this.distBTWN(ox,oy));
  }
  /**********************************************
   *             Scaling  Functions             *
   *********************************************/
  Px() {
    return 5000*(this.x-minX)/(maxX-minX);
  }
  Py() {
    return 2000*(maxY-this.y)/(maxY-minY);
  }
  Pr() {
    return 25*(this.size -minR)/(maxR-minR) + 1;
  }
  /*********************************************/

  /**
   * Draws Planets with color and size scaled.
   */
  show() {
      stroke(this.color);
      strokeWeight(3);
      fill(this.color);
      ellipse(this.Px(), this.Py(), this.Pr());
  }
}
