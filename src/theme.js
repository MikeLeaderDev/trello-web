import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red, cyan, teal, deepOrange, orange } from '@mui/material/colors'

const theme = extendTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500]
        },
        secondary: {
          main: deepOrange[500]
        },
        text: {
          secondary: red[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500]
        },
        secondary: {
          main: orange[500]
        },
        text: {
          secondary: red[500]
        }
      }
    }
  }
  // text: {
  //   secondary: red[500]
  // }
})

export default theme