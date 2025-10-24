import { Box } from '@mui/material'
import Chip from '@mui/material/Chip'

// icons
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined'
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

// classes
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

// helpers
import MenuStyle from '~/components/common/MenuStyle'
import { makeHoverIcon } from '~/components/common/HoverIcon'

function BoardBar() {
  return (
    <>
      <Box sx = {{
        backgroundColor: (theme) => {return theme.palette.primary.dark},
        width: '100%',
        height: (theme) => theme.tCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflowX: 'hidden',
        paddingX: 9,
        borderBottom: (theme) => `1px solid ${theme.palette.secondary_2.main}`,
        textColor: 'theme.palette.text.primary'
      }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            sx={MenuStyle}
            icon={makeHoverIcon(SpaceDashboardOutlinedIcon, SpaceDashboardIcon)}
            label="DevTeam Trello"
            clickable
          />
          <Chip
            sx={MenuStyle}
            icon={makeHoverIcon(AdminPanelSettingsOutlinedIcon, AdminPanelSettingsIcon)}
            label="Public/ Private Workspace"
            clickable
          />
          <Chip
            sx={MenuStyle}
            icon={makeHoverIcon(AddToDriveIcon, AddToDriveOutlinedIcon)}
            label="Add to Drive"
            clickable
          />
          <Chip
            sx={MenuStyle}
            icon={makeHoverIcon(OfflineBoltOutlinedIcon, OfflineBoltIcon)}
            label="Automation"
            clickable
          />
          <Chip
            sx={MenuStyle}
            icon={makeHoverIcon(FilterAltOutlinedIcon, FilterAltIcon )}
            label="Filter"
            clickable
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            // startIcon = { <PersonAddIcon />}
            sx = {{
              color: 'text.primary',
              bgcolor: 'secondary.dark',
              width: 120,
              border: 'none',
              paddingX: '2px',
              marginX: '4px',
              borderRadius: 1,
              '& .icon1': { position: 'absolute', left: 10, bottom: -3, opacity: 1, transition: 'opacity 0.1s' },
              '& .icon2': { position: 'absolute', left: 10, bottom: -3, opacity: 0, transition: 'opacity 0.1s' },
              '&:hover': {
                bgcolor: 'primary.dark',
                color: 'text.primary',
                borderWidth: '2px',
                borderColor: 'white'
              },
              '&:hover .icon1' : { opacity: 0 },
              '&:hover .icon2' : { opacity: 1 }
            }}>
            <span className="icon1"><PersonAddAltIcon /></span>
            <span className="icon2"><GroupAddIcon /></span>
              Invite
          </Button>

          <AvatarGroup max={2}
            sx = {{
              '& .MuiAvatar-root': {
                width:33,
                height:33,
                fontSize: 16,
                border: 'none',
                color: 'text.primary',
                // backgroundColor: 'secondary_2.main',
                cursor: 'pointer',
                '&:first-of-type': { bgcolor: 'secondary_2.main' }
              },
              gap: '10px'
            }}>
            <Tooltip title = 'Micah'>
              <Avatar alt="Micah" src="https://cdn11.bigcommerce.com/s-30c33/images/stencil/500x659/products/3709/5704/ArchangelMichaelNew2Small__19839.1649082647.jpg?c=2/static/images/avatar/1.jpg" />
            </Tooltip>
            <Tooltip title = 'Lennon'>
              <Avatar alt="Lennon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRfNKOqu53S9T9o98PYQL74KK1Vug_EU-Rg&s" />
            </Tooltip>
            <Tooltip title = 'Jiki'>
              <Avatar alt="Jiki" src="https://themovieisle.com/wp-content/uploads/2023/04/New-Gods-Yang-Jian.jpg" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}

export default BoardBar
