import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'

function ColumnFooter() {
  return (
    <Box
      sx= {{
        color: 'primary.main',
        height: (theme) => theme.tCustom.colFooterHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Button startIcon={<AddCardIcon/>}> Add new card </Button>
      <Tooltip title="Drag to move">
        <DragHandleIcon sx={{ cursor: 'pointer' }} />
      </Tooltip>
    </Box>
  )
}

export default ColumnFooter
