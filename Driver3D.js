let scene,camera,renderer,controls,gui;

let planetArray = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
let geometry = [];
let material = [];
let sphereArray = [];
let newPosX = [];
let newPosZ = [];

function init() {


    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize',function() {
        var width = window.innerWidth;;
        var height = window.innerHeight;
        renderer.setSize(width,height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    });

    for (var i = 0;i<planetArray.length;i++) {

        geometry[i] = new THREE.SphereGeometry(planetArray[i].Pr(), 10, 10 );
        material[i] = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load(planetArray[i].texture)} );
        sphereArray[i] = new THREE.Mesh(geometry[i], material[i]);
        sphereArray[i].translateX(planetArray[i].Px());
        sphereArray[i].translateZ(planetArray[i].Pz());
        scene.add(sphereArray[i]);
    }

    camera.position.z = 25;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    run();
    for (var i = 0;i < planetArray.length; i++) {
        newPosX[i] = planetArray[i].Px();
        newPosZ[i] = planetArray[i].Pz();
        sphereArray[i].position.x = newPosX[i];
        sphereArray[i].position.z = newPosZ[i];
    }
}

init();
animate();
