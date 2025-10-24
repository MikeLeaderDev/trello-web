// import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
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
// import TextField from '@mui/material/TextField'

// Badge
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'

// Help
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

// Profiles
import Profiles from '~/components/AppBar/Menus/Profiles.jsx'

// Create
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

// Search
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import AnimatedSearch from '~/components/AppBar/animation/AnimatedSearch.jsx'
import CloseIcon from '@mui/icons-material/Close'

// helpers
import BorderRules from '~/components/common/BorderRules'


function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Box sx ={{ backgroundColor: 'white',
        width: '100%',
        height: (theme) => theme.tCustom.appBarHeight,
        display: 'flex',
        aligned_items: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppsIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component = {TrelloIcon} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }} />
            <Typography component="span" variant="body1" sx= {{ fontSize: '1.3rem', fontWeight: 'bold', color: 'primary.main' }} > XTEAM </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspaces />
            <Recents />
            <Starred />
            <Templates />
            <Button variant="text" startIcon = {<LibraryAddIcon/>} > Create </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AnimatedSearch
            id="outlined-search"
            type="text"
            size="small"
            value={searchValue}
            onChange= {(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  sx={{ fontSize: 'small', cursor: 'pointer', color: searchValue ? 'primary.main' : 'transparent' }}
                  onClick = {() => setSearchValue('')}
                />
              )
            }}
            sx={{
              width: 200,
              color: 'success.main',
              variant: 'outlined',
              minWidth: '120px',
              '& label.Mui-focused': { color: 'primary.main' },
              '& .MuiOutlinedInput-root' : {
                '& fieldset': { borderWidth: BorderRules.normal },
                '&:hover fieldset': { borderWidth: BorderRules.hover },
                '&.Mui-focused fieldset': { borderWidth: BorderRules.focused }
              }
            }}
          />
          <ModeSelect />

          <Tooltip title="Notification">
            <Badge color="warning" variant="dot" sx = {{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx= {{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <Badge color="warning" variant="" sx = {{ cursor: 'pointer' }}>
              <HelpOutlineIcon sx= {{ color: 'primary.main' }}/>
            </Badge>
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
