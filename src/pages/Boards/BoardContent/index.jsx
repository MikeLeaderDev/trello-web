import { Box } from '@mui/material'

function BoardContent() {
  return (
    <>
      <Box sx ={{ backgroundColor: 'primary.main', width: '100%', height: (theme) => `calc(100vh - ${theme.tCustom.appBarHeight} - ${theme.tCustom.boardBarHeight})`, display: 'flex', aligned_items: 'center' }}>
          Board Content
      </Box>
    </>
  )
}

export default BoardContent