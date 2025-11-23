import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GridHelper } from '@react-three/drei';

const Cylinder = ({ frameDiameter, frameDepth }) => (
  <mesh>
    <cylinderGeometry args={[frameDiameter / 2, frameDiameter / 2, frameDepth, 64]} />
    <meshStandardMaterial color="lightgray" />
  </mesh>
);

const Driver = ({ frameDiameter, driverWidth, driverLength, driverDepth }) => (
  <mesh
    position={[frameDiameter / 2 + driverWidth / 2 + 20, 0, 0]}
    rotation={[-Math.PI / 2, 0, 0]} // rotate 90° around X to stand upright
  >
    <boxGeometry args={[driverWidth, driverDepth, driverLength]} />
    <meshStandardMaterial color="skyblue" />
  </mesh>
);

const Void = () => {
  const [frameDiameter, setFrameDiameter] = useState(100); // mm
  const [frameDepth, setFrameDepth] = useState(200); // mm

  const [driverWidth, setDriverWidth] = useState(60); // mm
  const [driverLength, setDriverLength] = useState(120); // mm
  const [driverDepth, setDriverDepth] = useState(40); // mm

  return (
    <div className="p-4 space-y-4">
      <div className="space-x-4">
        <label>
          Frame Diameter (mm):
          <input
            type="number"
            value={frameDiameter}
            onChange={(e) => setFrameDiameter(Number(e.target.value))}
            className="ml-2 border p-1 w-28"
          />
        </label>
        <label>
          Frame Depth (mm):
          <input
            type="number"
            value={frameDepth}
            onChange={(e) => setFrameDepth(Number(e.target.value))}
            className="ml-2 border p-1 w-28"
          />
        </label>
      </div>

      <div className="space-x-4">
        <label>
          Driver Width (mm):
          <input
            type="number"
            value={driverWidth}
            onChange={(e) => setDriverWidth(Number(e.target.value))}
            className="ml-2 border p-1 w-28"
          />
        </label>
        <label>
          Driver Length (mm):
          <input
            type="number"
            value={driverLength}
            onChange={(e) => setDriverLength(Number(e.target.value))}
            className="ml-2 border p-1 w-28"
          />
        </label>
        <label>
          Driver Depth (mm):
          <input
            type="number"
            value={driverDepth}
            onChange={(e) => setDriverDepth(Number(e.target.value))}
            className="ml-2 border p-1 w-28"
          />
        </label>
      </div>

      <Canvas camera={{ position: [200, 200, 200], fov: 50 }} style={{ height: '500px' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <gridHelper args={[500, 10]} />
        <Cylinder frameDiameter={frameDiameter} frameDepth={frameDepth} />
        <Driver
          frameDiameter={frameDiameter}
          driverWidth={driverWidth}
          driverLength={driverLength}
          driverDepth={driverDepth}
        />
      </Canvas>
    </div>
  );
};

export default Void;
