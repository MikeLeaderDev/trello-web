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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx ={{
        // backgroundColor: 'primary.main',
        bgcolor: (theme) => theme.palette.primary.main,
        width: '100%',
        height: (theme) => theme.tCustom.boardContentHeight,
        display: 'flex'
      }}>

        { /* BOX COLUMN */}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: 'secondary_3.main',
          ml: 2,
          borderRadius: '6px',
          px: '12px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.tCustom.boardContentHeight} - ${theme.spacing(5)})`
        }}
        >
          { /* Box Column Header*/ }
          <Box
            sx= {{
              color: 'primary.main',
              height: COLUMN_HEADER_HEIGHT,
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
          <Box
            sx= {{
              p: '0 1px',
              m: '0 1px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) =>
                `calc(${theme.tCustom.boardContentHeight} 
                  - ${theme.spacing(5)} 
                  - ${COLUMN_HEADER_HEIGHT}
                  - ${COLUMN_FOOTER_HEIGHT})`,
              /* Firefox */
              scrollbarWidth: 'thin',
              scrollbarColor: (theme) => `${theme.palette.secondary_3.main} transparent`, // thumb color, track color

              /* Chromium/WebKit */
              '*::-webkit-scrollbar': {
                width: '8px',
                height: '8px'
              },
              '*::-webkit-scrollbar-track': {
                backgroundColor: 'transparent'
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: (theme) => `${theme.palette.secondary.main} transparent`,
                borderRadius: '10px',
                border: '2px solid transparent', // makes thumb slimmer
                backgroundClip: 'content-box'
              },
              '*::-webkit-scrollbar-thumb:hover': {
                backgroundColor: (theme) => `${theme.palette.secondary.main} transparent`
              }
            }}>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140, borderRadius: '8px 8px 0 0' }}
                image="https://www.newhollandwood.com/wp-content/uploads/2019/10/1-Monastery-of-the-Holy-Cross-Chicago.jpg"
                title="Church"
              />
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }} >
                <Typography sx={{ color: 'text.secondary' }}>
                  Church
                </Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }} >
                <Button size="small" startIcon= { <GroupIcon sx= {{ mr: 0, ml: 2 }} />}> 20 </Button>
                <Button size="small" startIcon= { <CommentIcon sx= {{ mr: 0, ml: 2 }} />}> 15 </Button>
                <Button size="small" startIcon= { <AttachmentIcon sx= {{ mr: 0, ml: 2 }} />}> 10 </Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Most honored of virgins, pray for us. Mother of Christ, pray for us. Mother of the Church, pray for us. Mother of divine grace, pray for us.
                </Typography> */}
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              bgcolor: 'text.primary',
              boxShadow: (theme) => theme.tCustom.boxShadow,
              overflow: 'unset'
            }}>
              <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Card 01
                </Typography>
              </CardContent>
            </Card>
          </Box>

          { /* Box Column Footer*/ }
          <Box
            sx= {{
            color: 'primary.main',
            height: COLUMN_FOOTER_HEIGHT,
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
      </Box>

    </>
  )
}

export default BoardContent