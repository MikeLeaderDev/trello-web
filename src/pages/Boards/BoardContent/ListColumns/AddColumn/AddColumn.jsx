import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined'
import QueueIcon from '@mui/icons-material/Queue'
import { makeHoverIcon } from '~/components/common/HoverIcon'

function AddColumn() {
  return (
    <Box
      sx={{
        minWidth: '8.5rem',
        maxWidth: '8.5rem',
        mx: 2,
        borderRadius: 1.5,
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: (theme) => theme.palette.secondary.main
      }}
    >
      <Button
        startIcon={makeHoverIcon(QueueOutlinedIcon, QueueIcon)}
        sx={{
          color: (theme) => theme.palette.primary.main,
          border: (theme) => `2px solid ${theme.palette.primary.dark}`,
          width: '100%', //full width here
          textTransform: 'none',
          // nice space between icon and text
          '& .MuiButton-startIcon': { mr: 1.25 },
          // hover swap
          '& .icon1': { opacity: 1 },
          '& .icon2': { opacity: 0 },
          '&:hover .icon1': { opacity: 0 },
          '&:hover .icon2': { opacity: 1 },
          justifyContent: 'flex',
          pl: 2,
          '&:hover': {
            bgcolor: 'secondary.main',
            color: 'text.primary',
            border: '2px solid white'
          }
        }}
      >
        <Box sx= {{
          color: (theme) => theme.palette.text.primary, fontWeight: 'normal'
        }}> Add column </Box>
      </Button>
    </Box>
  )
}

export default AddColumn
