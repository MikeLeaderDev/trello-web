// import React from 'react'
import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'

// svg import using svgr plugin
import { ReactComponent as TrelloIcon } from '~/assets/mditrello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Typography } from '@mui/material'

// import Menus
import Workspaces from '~/components/AppBar/Menus/Workspaces.jsx'
import Recents from '~/components/AppBar/Menus/Recents.jsx'
import Starred from '~/components/AppBar/Menus/Starred.jsx'
import Templates from '~/components/AppBar/Menus/Templates.jsx'
import Button from '@mui/material/Button'

// Text field
import TextField from '@mui/material/TextField'

// Badge
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'

// Help
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

// Profiles
import Profiles from '~/components/AppBar/Menus/Profiles.jsx'


function AppBar() {

  return (
    <>
      <Box px={2} sx ={{ backgroundColor: 'white', width: '100%',
        height: (theme) => theme.tCustom.appBarHeight, display: 'flex', aligned_items: 'center',
        justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component = {TrelloIcon} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }} />
            <Typography component="span" variant="body1" sx= {{ fontSize: '1.3rem', fontWeight: 'bold', color: 'primary.main' }} > Trello </Typography>
          </Box>
          <Workspaces />
          <Recents />
          <Starred />
          <Templates />
          <Button variant="outlined"> Create </Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField id="outlined-search" label="Search..." type="search" size= 'small' sx={{
            width: 200,
            color: 'success.main',
            variant: 'outlined',
            '& .css-e6p3j7-MuiFormLabel-root-MuiInputLabel-root': {
              color: 'primary.main'
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              color: 'primary.main'
            }
          }}/>
          <ModeSelect />

          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx = {{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx= {{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge color="secondary" variant="" sx = {{ color: 'primary.main', cursor: 'pointer' }}>
              <HelpOutlineIcon />
            </Badge>
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
