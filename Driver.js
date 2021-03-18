/**
 * @fileoverview Holds a number of methods that operate on objects of the type Planet.
 * This will be the main driver for our Solar System Sim. Driver.js is responssibe for the initialization,
 * of the Solar System, aswell as the graphics side of the simulation.
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.3
 */
/**
 * Function for setting up our canvas for animation
 */
function setup() {
    createCanvas(5000,2000);
    frameRate(30);
}
/**
 * Function for drawing and plotting the planets
 */
function draw() {
    background(0);
    sun.show();
    mercury.show();
    venus.show();
    earth.show();
    mars.show();
    jupiter.show();
    saturn.show();
    uranus.show();
    neptune.show();
    pluto.show();
    run();
}
