// import CssBaseline from "@mui/material/CssBaseline"
import { Box } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
// helpers
import BorderRules from '~/components/common/BorderRules'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const safeMode = mode ?? 'system'

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={safeMode}
        label="Mode"
        onChange={handleChange}
        // variant="outlined"
        sx={{
          color: 'primary.main',
          // default state
          '&. MuiOutlinedInput-notchedOutline': { borderWidth: BorderRules.normal },
          // hover state
          '&:hover .MuiOutlinedInput-notchedOutline': { borderWidth: BorderRules.hover },
          // FOCUSED state
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderWidth: BorderRules.focused }
        }}
      >
        <MenuItem value="light">
          <Box className="" sx={{ display: 'flex', alignItems: 'center', minWidth: '120px', gap: 1, color: 'primary.main' }}>
            <LightModeIcon fontSize = 'small'> </LightModeIcon> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box className="" sx={{ display: 'flex', alignItems: 'center', minWidth: '120px', gap: 1, color: 'primary.main' }}>
            <DarkModeOutLinedIcon fontSize = 'small'> </DarkModeOutLinedIcon> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box className="" sx={{ display: 'flex', alignItems: 'center', minWidth: '120px', gap: 1, color: 'primary.main' }}>
            <SettingsBrightnessIcon fontSize = 'small'> </SettingsBrightnessIcon> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
