import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'

export function CardPreview({ card }) {
  return (
    <Box sx={{ pointerEvents: 'none' }}>
      <MuiCard sx={{ cursor: 'grab', bgcolor: 'text.primary', borderRadius: 2 }}>
        <CardContent sx={{ p: 5, '&:last-child': { px: 0, py: 2, opacity: 0 } }}>
          <Typography sx={{ color: 'text.secondary', height: '10px', width: '10px', opacity: 0 }}> {card?.title} </Typography>
        </CardContent>
      </MuiCard>
    </Box>
  )
}

export function ColumnPreview ({ column }) {
  return (
    <Box sx={{ pointerEvents: 'none' }}>
      <MuiCard sx={{ cursor: 'grab', bgcolor: 'text.primary', borderRadius: 2 }}>
        <CardContent sx={{ p: 5, '&:last-child': { px: 0, py: 2, opacity: 0 } }}>
          <Typography sx={{ color: 'text.secondary', height: '10px', width: '10px', opacity: 0 }}> {column?.title} </Typography>
        </CardContent>
      </MuiCard>
    </Box>
  )
}