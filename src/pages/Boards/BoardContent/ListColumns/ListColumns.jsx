import { Box } from '@mui/material'
import Column from './Column/ColumnMain'
import AddColumn from './AddColumn/AddColumn'

function ListColumns({ columns }) {
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
      {columns?.map((column) => (
        <Column key={column._id}
          column={column}
        />
      ))}
      {/* <Column /> */}
      {/* Add new column button box */}
      <AddColumn/>
    </Box>
  )
}

export default ListColumns
