import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'

export default function AnimatedSearch(props) {
  const [isFocused, setIsFocused] = useState(false)
  const [dots, setDots] = useState('')

  // Animate dots when focused
  useEffect(() => {
    if (!isFocused) return
    let i = 0
    const interval = setInterval(() => {
      setDots('.'.repeat((i % 7) + 1))
      i++
    }, 400)
    return () => clearInterval(interval)
  }, [isFocused])

  return (
    <TextField
      {...props}
      label={isFocused ? dots : 'Search'}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false)
        setDots('')
      }}
      sx={{
        ...props.sx,
        // 👇 animate label color
        '& label.Mui-focused': {
          color: 'primary.main',
          transition: 'color 0.3s ease-in-out'
        }
      }}
    />
  )
}
// old code
{/* <TextField
  id="outlined-search"
  label="Search"
  type="search"
  size= 'small'
  InputProps= {{
    startAdornment : (
      <InputAdornment position="start">
        <SearchIcon sx={{ color:'primary.main' }}/>
      </InputAdornment>
    )
  }}
  sx={{
    width: 200,
    color: 'success.main',
    variant: 'outlined',
    minWidth: '120px',
    // '& label': { fontWeight: 'bold' },
    // '& input': { color : 'red' }
    '& label.Mui-focused': { color : 'red' }
  }}/> */}