import React from 'react'
import { Box } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCardIcon from '@mui/icons-material/AddCard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo'

function ColumnHeader({ title }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
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
        {title}
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
  )
}

export default ColumnHeader
