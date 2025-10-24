import { Box } from '@mui/material'
import Column from './Column/Column'
import AddColumn from './AddColumn/AddColumn'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}
    >
      <Column />
      <Column />
      <Column />
      {/* Add new column button box */}
      <AddColumn/>
    </Box>
  )
}

export default ListColumns
