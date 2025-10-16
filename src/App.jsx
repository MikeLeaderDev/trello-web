// import useState from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import TextField from '@mui/material/TextField'
import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { pink, red } from '@mui/material/colors'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function HomeIconSVG(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode"> Mode </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box className="" sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <LightModeIcon fontSize = 'small'> </LightModeIcon> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box className="" sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <DarkModeOutLinedIcon fontSize = 'small'> </DarkModeOutLinedIcon> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system"> 
          <Box className="" sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <SettingsBrightnessIcon fontSize = 'small'> </SettingsBrightnessIcon> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   return (
//     <Button onClick = {() => {
//       setMode (mode ==='light' ? 'dark' : 'light')
//       // localStorage.setItem('trello-dark-light-mode')
//       // localStorage.getItem('trello-dark-light-mode')
//     }}> {mode === 'light' ? 'Turn dark' : 'Turn Light'} </Button>
//   )
// }

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <ModeSelect> </ModeSelect>
        {/* <ModeToggle> </ModeToggle> */}
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
