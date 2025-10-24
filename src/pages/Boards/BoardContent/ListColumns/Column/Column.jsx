import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'


function Column() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: 'secondary_3.main',
      ml: 2,
      borderRadius: 2,
      px: '8px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.tCustom.boardContentHeight} - ${theme.spacing(5)})`
    }}
    >
      { /* Box Column Header*/ }
      <Box
        sx= {{
          color: 'primary.main',
          height: (theme) => theme.tCustom.colHeaderHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Typography
          variant ="h6"
          sx ={{
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
          Column Title
        </Typography>
        <Box>
          <Tooltip title = 'more options'>
            {<ExpandMoreIcon
              sx = {{ color: 'primary.main', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-column-dropdown-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}/>}
          </Tooltip>

          <Menu
            id="basic-column-dropdown-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPasteGoIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <RemoveCircleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      { /* Box List Card*/ }
      <ListCards/>

      { /* Box Column Footer*/ }
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
    </Box>
  )
}

export default Column
