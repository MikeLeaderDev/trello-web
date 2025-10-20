import { Box } from '@mui/material'

function BoardBar() {
  return (
    <>
      <Box sx ={{ backgroundColor: 'primary.dark', width: '100%', height: (theme) => theme.tCustom.boardBarHeight, display: 'flex', aligned_items: 'center' }}>
          Board bar
      </Box>
    </>
  )
}

export default BoardBar
