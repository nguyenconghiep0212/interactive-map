import * as THREE from "three";
import createLineLoopWithMesh from "/@/utils/helper/orbitalPath";

// ADDING EARTH
export const mercurySystemObj = new THREE.Object3D();

const mercuryTexture = new THREE.TextureLoader().load(
  "src/assets/images/mercury.jpg"
);
const mercuryNormalTexture = new THREE.TextureLoader().load(
  "src/assets/images/mercury_normal_map.jpg"
);
export const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: mercuryNormalTexture,
  })
);
mercury.position.set(30, 0, 0);
export const mercuryPath = createLineLoopWithMesh(30, "white", 1);

mercurySystemObj.add(mercury);