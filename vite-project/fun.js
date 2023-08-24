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

function animate() {
  requestAnimationFrame(animate);
  cubeMesh.rotation.y += 0.01; .
  sphereMesh.rotation.x += 0.01;
  sphereMesh.rotation.y += 0.01;
  renderer.render(scene, camera); 
}
animate(); 
