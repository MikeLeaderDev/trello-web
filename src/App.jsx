import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { pink, red } from '@mui/material/colors'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import CssBaseline from '@mui/material/CssBaseline'


function HomeIconSVG(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <div>
        {/* <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div> 
        Trungquandev.com  
      </div>
      <Button variant="contained"> Hello Kitty </Button>
      <Button variant="outlined"> Hello Happy World </Button>
      <Button variant="text"> This is my React </Button>

      <AccessAlarm /> 
      <ThreeDRotation/> 
      <HomeIcon sx={{ color: pink[500] }} />
      <HomeIconSVG sx={{ color: red[500] }} />
    </>
  )
}

export default App
