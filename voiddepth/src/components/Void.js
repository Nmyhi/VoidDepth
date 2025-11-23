import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cylinder = ({ diameter, length }) => {
  return (
    <mesh>
      <cylinderGeometry args={[diameter / 2, diameter / 2, length, 32]} />
      <meshStandardMaterial color="lightgray" />
    </mesh>
  );
};

const Void = () => {
  const [diameter, setDiameter] = useState(100); // mm
  const [length, setLength] = useState(200); // mm

  return (
    <div className="p-4">
      <div className="mb-4 space-x-4">
        <label>
          Diameter (mm):
          <input
            type="number"
            value={diameter}
            onChange={(e) => setDiameter(Number(e.target.value))}
            className="ml-2 border p-1 w-24"
          />
        </label>
        <label>
          Length (mm):
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 border p-1 w-24"
          />
        </label>
      </div>

      <Canvas style={{ height: '400px' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <Cylinder diameter={diameter} length={length} />
      </Canvas>
    </div>
  );
};

export default Void;
