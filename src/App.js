import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './App.scss';

const Box = () => (
  <mesh position={[0,2,0]}>
    <boxBufferGeometry attach="geometry"/>
    <meshLambertMaterial attach="material" color="hotpink"/>
  </mesh>
)

const Plane = () => (
  <mesh position={[0,0,0]} rotation={[-Math.PI / 2,0,0]}>
    <boxBufferGeometry attach="geometry" args={[100,100]} />
    <meshLambertMaterial attach="material" color="lightblue"/>
  </mesh>
)

export default function App() {
  return (
    <Canvas>
      <Stars/>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10,15,10]} angle={0.3}
      />
      <OrbitControls/>
      <Box/>
      <Plane/>
    </Canvas>
  )
};
