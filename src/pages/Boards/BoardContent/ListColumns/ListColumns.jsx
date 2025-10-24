import { Box } from '@mui/material'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined'
import QueueIcon from '@mui/icons-material/Queue'
import { makeHoverIcon } from '~/components/common/HoverIcon'

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

      {/* Add new column button box */}
      <Box
        sx={{
          minWidth: '10rem',
          maxWidth: '10rem',
          mx: 2,
          borderRadius: 1.5,
          height: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: (theme) => theme.palette.secondary.main,
          '&:hover': {
            bgcolor: 'secondary_2.main',
            color: 'text.primary'
          }
        }}
      >
        <Button
          startIcon={makeHoverIcon(QueueOutlinedIcon, QueueIcon)}
          sx={{
            color: (theme) => theme.palette.primary.main,
            width: '100%', //full width here
            textTransform: 'none',
            // nice space between icon and text
            '& .MuiButton-startIcon': { mr: 1.25 },
            // hover swap
            '& .icon1': { opacity: 1 },
            '& .icon2': { opacity: 0 },
            '&:hover .icon1': { opacity: 0 },
            '&:hover .icon2': { opacity: 1 }
          }}
        >
          <Box sx= {{ color: (theme) => theme.palette.text.primary, fontWeight: 'normal' }}> Add new column </Box>
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
