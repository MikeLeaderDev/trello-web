import { Box } from '@mui/material'

function BoardBar() {
  return (
    <>
      <Box sx ={{ backgroundColor: 'primary.dark', width: '100%',
        height: (theme) => theme.tCustom.boardBarHeight, display: 'flex',
        alignItems: 'center', textColor: 'theme.palette.text.primary' }}>
          Board bar
      </Box>
    </>
  )
}

export default BoardBar
