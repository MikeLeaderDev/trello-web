// import { Box } from '@mui/material'

// export default function HoverIcon({ Icon1, Icon2, size = 22 }) {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: size,
//         height: size
//       }}
//     >
//       <Icon1 className="icon1" sx={{ position: 'absolute', transition: 'opacity 0.2s ease' }} />
//       <Icon2 className="icon2" sx={{ position: 'absolute', transition: 'opacity 0.2s ease' }} />
//     </Box>
//   )
// }
// HoverIconFactory.js
import { Box } from '@mui/material'

export const makeHoverIcon = (Icon1, Icon2, size = 22) => (
  <Box
    sx={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size
    }}
  >
    <Icon1 className="icon1" sx={{ position: 'absolute', transition: 'opacity 0.2s ease' }} />
    <Icon2 className="icon2" sx={{ position: 'absolute', transition: 'opacity 0.2s ease' }} />
  </Box>
)
