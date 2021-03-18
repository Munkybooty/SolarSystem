/**
 * @fileoverview Holds a number of methods that operate on objects of the type Planet.
 * This will be the main driver for our Solar System Sim. Driver.js is responssibe for the initialization,
 * of the Solar System, aswell as the graphics side of the simulation. 
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.0.0
 */
// Array Declarations
var planetArray = [];
var distanceArray = [];
/**
 * Responsible for the initialization of the canvas aswell,
 * as initializing our planet Array and distance Array.
 */
function setup() {
    createCanvas(5000,2000);
    planetArray = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
    distanceArray = [sun.dist(mercury.x,mercury.y), mercury.dist(venus.x,venus.y),
    venus.dist(earth.x,earth.y), earth.dist(mars.x,mars.y), mars.dist(jupiter.x,jupiter.y),
    jupiter.dist(saturn.x,saturn.y),saturn.dist(uranus.x,uranus.y), uranus.dist(neptune.x,neptune.y), 
    neptune.dist(pluto.x,pluto.y)];
    console.log(Math.max.apply(Math, distanceArray));
    let maxDist = Math.max.apply(Math, distanceArray);
    let minDist = Math.min.apply(Math, distanceArray);
    console.log(distanceArray);
    console.log(minDist);
    console.log(maxDist);
}
/**
 * Responsible for plotting the planets on our canvas.
 */
function draw() {
    background(0);
    for (var i = 0; i < planetArray.length; i++){
        planetArray[i].show();
    }
}

