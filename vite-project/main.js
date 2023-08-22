import * as THREE from "three";

// Setting up a scene
const scene = new THREE.Scene();

// Setting up a camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of View
  window.innerWidth / window.innerHeight, // Aspect Ratio
  0.1, // Near
  1000 // Far
);

camera.position.z = 5;

// Setting up a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add some lights
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// render the scene
// The function animate is called over and over again, once per frame.
// Once per frame means, as fast as possible. Usually, this is 60 frames per second, but it depends on the browser and the device.
// Meaning, if you want to animate something, you have to change the properties of the cube inside the animate function.
function animate() {
  requestAnimationFrame(animate); // requestAnimationFrame is a function that tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
  cube.rotation.x += 0.01; // here we are changing the rotation of the cube on the x-axis on every frame by 0.01, to make it spin.
  cube.rotation.y += 0.01; // same for the y axis.
  renderer.render(scene, camera); // render the scene. This will create one still image / frame of the scene. It is like a snapshot of the camera. The "render" function takes two arguments: the scene and the camera.
}
animate(); // call the animate function. This will start the animation loop.
