import reactLogo from './assets/react.svg'
import './App.css'
import { lazy, Suspense } from "react";



function App() {

  const Button = lazy(() => import('remoteApp/Button').catch(() => ({ default: () => <div>Failed to load</div> })));


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Host) 1</h1>
      <div className="card">
      <Suspense fallback={<div>
        <p>Loading...</p>
      </div> }>
        <Button title="UNI"/>
      </Suspense>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
