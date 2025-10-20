import { Box } from '@mui/material'
import ModeSelect from '../../components/ModeSelect'

function AppBar() {
  return (
    <>
      <Box sx ={{ backgroundColor: 'primary.light', width: '100%', height: (theme) => theme.tCustom.appBarHeight, display: 'flex', aligned_items: 'center' }}>
        <ModeSelect> </ModeSelect>
      </Box>
    </>
  )
}

export default AppBar
