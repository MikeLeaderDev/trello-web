import { Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Button from '@mui/material/Button'

function Card( { temporaryHideMedia } ) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        bgcolor: 'text.primary',
        boxShadow: (theme) => theme.tCustom.boxShadow,
        overflow: 'unset'
      }}>
        <CardContent sx= {{ p:5, '&:last-child': { px: 5, py: 2 } }} >
          <Typography sx={{ color: 'text.secondary' }}>
            Church hide media
          </Typography>
        </CardContent>
      </MuiCard>
    )
  }
  else {
    return (
      <MuiCard sx={{
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
      </MuiCard>
    )
  }
}

export default Card
