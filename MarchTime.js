/**
 * @fileoverview Calculates the values of our positions and velocities by using our 
 * accelerations in both the X and Y direction
 * @author Hussain Raza <hraza8@gatech.edu>
 * @author Isaac Naupa <iaguirre6@gatech.edu>
 * @version 1.3
 */
// Time Step
let dt = 10000;
let options,gui;

const m1 = sun.mass;
const m2 = mercury.mass;
const m3 = venus.mass;
const m4 = earth.mass;
const m5 = mars.mass;
const m6 = jupiter.mass;
const m7 = saturn.mass;
const m8 = uranus.mass;
const m9 = neptune.mass;
const m10 = pluto.mass;

function createGUI() {
    options = {
    Masses: {
        SunMass: sun.mass,
        MercuryMass: mercury.mass,
        VenusMass:venus.mass,
        EarthMass:earth.mass,
        MarsMass: mars.mass,
        JupiterMass: jupiter.mass,
        SaturnMass: saturn.mass,
        UranusMass: uranus.mass,
        NeptuneMass:neptune.mass,
        PlutoMass:pluto.mass,
    },
    reset: function () {
        this.SunMass = m1;
        this.MercuryMass = m2;
        this.VenusMass = m3;
        this.EarthMass = m4;
        this.MarsMass =  m5;
        this.JupiterMass = m6;
        this.SaturnMass = m7;
        this.UranusMass = m8;
        this.NeptuneMass = m9;
        this.PlutoMass = m10;
    },

};

    gui = new dat.GUI();

    Masses = gui.addFolder('Masses');
    Masses.add(options.Masses, 'SunMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'MercuryMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'VenusMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'EarthMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'MarsMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'JupiterMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'SaturnMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'UranusMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'NeptuneMass', 1, 1e31).listen();
    Masses.add(options.Masses, 'PlutoMass', 1, 1e31).listen();

    gui.add(options,'reset');


}

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

function run() {
    sun.mass = options.Masses.SunMass;
    mercury.mass = options.Masses.MercuryMass;
    venus.mass = options.Masses.VenusMass;
    earth.mass = options.Masses.EarthMass;
    mars.mass = options.Masses.MarsMass;
    jupiter.mass = options.Masses.JupiterMass;
    saturn.mass = options.Masses.SaturnMass;
    uranus.mass = options.Masses.UranusMass;
    neptune.mass = options.Masses.NeptuneMass;
    pluto.mass = options.Masses.PlutoMass;

    sun.ax = accX(sun);
    sun.ay = accY(sun);
    mercury.ax = accX(mercury);
    mercury.ay = accY(mercury);
    venus.ax = accX(venus);
    venus.ay = accY(venus);
    earth.ax = accX(earth);
    earth.ay = accY(earth);
    mars.ax = accX(mars);
    mars.ay = accY(mars);
    jupiter.ax = accX(jupiter);
    jupiter.ay = accY(jupiter);
    saturn.ax = accX(saturn);
    saturn.ay = accY(saturn);
    uranus.ax = accX(uranus);
    uranus.ay = accY(uranus);
    neptune.ax = accX(neptune);
    neptune.ay = accY(neptune);
    pluto.ax = accX(pluto);
    pluto.ay = accY(pluto);


    sun.x += sun.vx*dt + sun.ax*.5*dt*dt;
    sun.y += sun.vy*dt + sun.ay*.5*dt*dt;
    sun.vx += .5*(sun.ax + accX(sun))*dt;
    sun.vy += .5*(sun.ay + accY(sun))*dt;

    mercury.x += mercury.vx*dt + mercury.ax*.5*dt*dt;
    mercury.y += mercury.vy*dt + mercury.ay*.5*dt*dt;
    mercury.vx += .5*(mercury.ax + accX(mercury))*dt;
    mercury.vy += .5*(mercury.ay + accY(mercury))*dt;

    venus.x += venus.vx*dt + venus.ax*.5*dt*dt;
    venus.y += venus.vy*dt + venus.ay*.5*dt*dt;
    venus.vx += .5*(venus.ax + accX(venus))*dt;
    venus.vy += .5*(venus.ay + accY(venus))*dt;

    earth.x += earth.vx*dt + earth.ax*.5*dt*dt;
    earth.y += earth.vy*dt + earth.ay*.5*dt*dt;
    earth.vx += .5*(earth.ax + accX(earth))*dt;
    earth.vy += .5*(earth.ay + accY(earth))*dt;

    mars.x += mars.vx*dt + mars.ax*.5*dt*dt;
    mars.y += mars.vy*dt + mars.ay*.5*dt*dt;
    mars.vx += .5*(mars.ax + accX(mars))*dt;
    mars.vy += .5*(mars.ay + accY(mars))*dt;

    jupiter.x += jupiter.vx*dt + jupiter.ax*.5*dt*dt;
    jupiter.y += jupiter.vy*dt + jupiter.ay*.5*dt*dt;
    jupiter.vx += .5*(jupiter.ax + accX(jupiter))*dt;
    jupiter.vy += .5*(jupiter.ay + accY(jupiter))*dt;

    saturn.x += saturn.vx*dt + saturn.ax*.5*dt*dt;
    saturn.y += saturn.vy*dt + saturn.ay*.5*dt*dt;
    saturn.vx += .5*(saturn.ax + accX(saturn))*dt;
    saturn.vy += .5*(saturn.ay + accY(saturn))*dt;

    uranus.x += uranus.vx*dt + uranus.ax*.5*dt*dt;
    uranus.y += uranus.vy*dt + uranus.ay*.5*dt*dt;
    uranus.vx += .5*(uranus.ax + accX(uranus))*dt;
    uranus.vy += .5*(uranus.ay + accY(uranus))*dt;

    neptune.x += neptune.vx*dt + neptune.ax*.5*dt*dt;
    neptune.y += neptune.vy*dt + neptune.ay*.5*dt*dt;
    neptune.vx += .5*(neptune.ax + accX(neptune))*dt;
    neptune.vy += .5*(neptune.ay + accY(neptune))*dt;

    pluto.x += pluto.vx*dt + pluto.ax*.5*dt*dt;
    pluto.y += pluto.vy*dt + pluto.ay*.5*dt*dt;
    pluto.vx += .5*(pluto.ax + accX(pluto))*dt;
    pluto.vy += .5*(pluto.ay + accY(pluto))*dt;

}
