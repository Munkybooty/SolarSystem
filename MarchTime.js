/**
 * @fileoverview Calculates the values of our positions and velocities by using our 
 * accelerations in both the X and Y direction
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.1
 */
// Time Step
let dt = 10000; // s
/**
 * Returns the acceleration of a planet in the X direction
 * @param {Planet} planet 
 * @returns the acceleration
 */
function accX(planet) {
    switch(planet){
        case sun : return sun.accelerationX(mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case mercury : return mercury.accelerationX(sun,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case venus : return venus.accelerationX(mercury,sun,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case earth : return earth.accelerationX(mercury,venus,sun,mars,jupiter,saturn,uranus,neptune,pluto);
        case mars : return mars.accelerationX(mercury,venus,earth,sun,jupiter,saturn,uranus,neptune,pluto);
        case jupiter : return jupiter.accelerationX(mercury,venus,earth,mars,sun,saturn,uranus,neptune,pluto);
        case saturn : return saturn.accelerationX(mercury,venus,earth,mars,jupiter,sun,uranus,neptune,pluto);
        case uranus : return uranus.accelerationX(mercury,venus,earth,mars,jupiter,saturn,sun,neptune,pluto);
        case neptune : return neptune.accelerationX(mercury,venus,earth,mars,jupiter,saturn,uranus,sun,pluto);
        case pluto: return pluto.accelerationX(mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,sun);
    }
}
/**
 * Returns the acceleration of a planet in the Y direction
 * @param {Planet} planet 
 * @returns the acceleration
 */
function accY(planet) {
    switch(planet) {
        case sun : return sun.accelerationY(mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case mercury : return mercury.accelerationY(sun,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case venus : return venus.accelerationY(mercury,sun,earth,mars,jupiter,saturn,uranus,neptune,pluto);
        case earth : return earth.accelerationY(mercury,venus,sun,mars,jupiter,saturn,uranus,neptune,pluto);
        case mars : return mars.accelerationY(mercury,venus,earth,sun,jupiter,saturn,uranus,neptune,pluto);
        case jupiter : return jupiter.accelerationY(mercury,venus,earth,mars,sun,saturn,uranus,neptune,pluto);
        case saturn : return saturn.accelerationY(mercury,venus,earth,mars,jupiter,sun,uranus,neptune,pluto);
        case uranus : return uranus.accelerationY(mercury,venus,earth,mars,jupiter,saturn,sun,neptune,pluto);
        case neptune : return neptune.accelerationY(mercury,venus,earth,mars,jupiter,saturn,uranus,sun,pluto);
        case pluto: return pluto.accelerationY(mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,sun);
    }
}
/**
 * Calculates the position and velocity of each body per timestep
 */
function run() {

    sun.x += sun.vx*dt;
    sun.y += sun.vy*dt;
    sun.vx += accX(sun)*dt;
    sun.vy += accY(sun)*dt;

    mercury.x += mercury.vx*dt;
    mercury.y += mercury.vy*dt;
    mercury.vx += accX(mercury)*dt;
    mercury.vy += accY(mercury)*dt;

    venus.x += venus.vx*dt;
    venus.y += venus.vy*dt;
    venus.vx += accX(venus)*dt;
    venus.vy += accY(venus)*dt;

    earth.x += earth.vx*dt;
    earth.y += earth.vy*dt;
    earth.vx += accX(earth)*dt;
    earth.vy += accY(earth)*dt;

    mars.x += mars.vx*dt;
    mars.y += mars.vy*dt;
    mars.vx += accX(mars)*dt;
    mars.vy += accY(mars)*dt;

    jupiter.x += jupiter.vx*dt;
    jupiter.y += jupiter.vy*dt;
    jupiter.vx += accX(jupiter)*dt;
    jupiter.vy += accY(jupiter)*dt;

    saturn.x += saturn.vx*dt;
    saturn.y += saturn.vy*dt;
    saturn.vx += accX(saturn)*dt;
    saturn.vy += accY(saturn)*dt;

    uranus.x += uranus.vx*dt;
    uranus.y += uranus.vy*dt;
    uranus.vx += accX(uranus)*dt;
    uranus.vy += accY(uranus)*dt;

    neptune.x += neptune.vx*dt;
    neptune.y += neptune.vy*dt;
    neptune.vx += accX(neptune)*dt;
    neptune.vy += accY(neptune)*dt;

    pluto.x += pluto.vx*dt;
    pluto.y += pluto.vy*dt;
    pluto.vx += accX(pluto)*dt;
    pluto.vy += accY(pluto)*dt;
}
