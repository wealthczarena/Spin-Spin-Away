import * as THREE from "three";

// Setting up a scene
const scene = new THREE.Scene();

// Setting up a camera
const camera = new THREE.PerspectiveCamera(
  45, // Field of View
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near
  1000 // Far
);

camera.position.z = 5;
// This was one of reasons for the bug. You are not seeing the cube because the camera is at the same position as the cube by default, i.e., at (0, 0, 0.
// This is a common mistake when starting with Three.js. All the objects dragged at the scene are at (0, 0, 0) by default.
// So, if you don't move the camera, you won't see anything becaue they are overlapping each other.

// Setting up a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating a cube and a sphere
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshNormalMaterial();
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.x = 1;
scene.add(cubeMesh);

const sphereGeometry = new THREE.SphereGeometry(15, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.x = -1;
scene.add(sphereMesh);

// Add some lights
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// render the scene. This is the second reason why you are not seeing the cube. You are not rendering the scene.
// The function animate is called over and over again, once per frame.
// Once per frame means, as fast as possible. Usually, this is 60 frames per second, but it depends on the browser and the device.
// Meaning, if you want to animate something, you have to change the properties of the cube inside the animate function.
function animate() {
  requestAnimationFrame(animate); // requestAnimationFrame is a function that tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
  cubeMesh.rotation.x += 0.01; // here we are changing the rotation of the cube on the x-axis on every frame by 0.01, to make it spin.
  cubeMesh.rotation.y += 0.01; // same for the y axis.
  sphereMesh.rotation.x += 0.01;
  sphereMesh.rotation.y += 0.01;
  renderer.render(scene, camera); // render the scene. This will create one still image / frame of the scene. It is like a snapshot of the camera. The "render" function takes two arguments: the scene and the camera.
}
animate(); // call the animate function. This will start the animation loop.
