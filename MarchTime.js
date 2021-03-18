let dt = 10000;

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
