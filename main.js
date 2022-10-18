let cubeStatus = 0

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);
light.position.set(0, 8, 8)

var geometry = new THREE.BoxGeometry(3, 3, 3);
var material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);



camera.position.z = 5;


document.addEventListener("click",activeSpin)

let text = document.querySelector("#text")

let spin = false;
function activeSpin(){
    spin = true
    text.classList.remove("show")
    setTimeout(function () {
        spin = false;
        text.classList.add("show")
    }, 2800);
    cubeStatus += 1
}

function animate() {
    requestAnimationFrame(animate);

    if(spin) {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
    }

    renderer.render(scene, camera);
}


animate();