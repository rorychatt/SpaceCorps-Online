import './App.css'
import Canvas from "./components/Canvas.tsx";
import UI from "./components/UI.tsx";

function App() {

    return (
        <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
            <Canvas/>
            <UI/>
        </div>
    )
}

export default App
