import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <>
      <Box sx ={{
        bgcolor: (theme) => theme.palette.primary.main,
        width: '100%',
        height: (theme) => theme.tCustom.boardContentHeight,
        // display: 'flex'
        p: '5px 0'
      }}>
        <ListColumns/>
      </Box>
    </>
  )
}

export default BoardContent