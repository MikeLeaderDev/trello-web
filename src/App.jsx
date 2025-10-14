import useState from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Button from '@mui/material/Button'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { pink, red } from '@mui/material/colors'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

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
      <div> 
        <p>Trungquandev.com </p>
        <Typography variant = 'body2' color = "text.secondary" > Variant typo </Typography>
        <Button variant="contained"> Hello Kitty </Button>
        <Button variant="outlined"> Hello Happy World </Button>
        <Button variant="text"> This is my React </Button>

        <AccessAlarm /> 
        <ThreeDRotation/> 
        <HomeIcon sx={{ color: pink[500] }} />
        <HomeIconSVG sx={{ color: red[500] }} />
      </div>
    </>
  )
}

export default App
