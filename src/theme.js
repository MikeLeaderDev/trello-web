import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'

// import { red, cyan, orange } from '@mui/material/colors'
// import { teal, deepOrange } from '@mui/material/colors'

const my_palette_light = {
  'primary': 'rgb(10, 64, 12)',
  'secondary': 'rgb(129, 144, 103)',
  'secondary_2': 'rgb(177, 171, 134)',
  'text': 'rgb(254, 250, 224)'
}

const my_palette_dark = {
  'primary': 'rgb(33, 53, 85)',
  'secondary': 'rgb(62, 88, 121)',
  'secondary_2': 'rgb(216, 196, 182)',
  'text': 'rgb(245, 239, 231)'
}

const theme = extendTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  tCustom: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: my_palette_light.primary // teal[500]
        },
        secondary: {
          main: my_palette_light.secondary //deepOrange[500]
        },
        secondary_2: {
          main: my_palette_light.secondary_2 //deepOrange[500]
        },
        text: {
          primary: my_palette_light.text //red[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: my_palette_dark.primary // teal[500]
        },
        secondary: {
          main: my_palette_dark.secondary //deepOrange[500]
        },
        secondary_2: {
          main: my_palette_dark.secondary_2 //deepOrange[500]
        },
        text: {
          primary: my_palette_dark.text //red[500]
        }
      }
    }
  },
  components: {
    // Name of the component
    MuiCssBaseline:{
      styleOverrides: ( theme ) => ({
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme.palette.secondary.main} transparent`,
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '10px'
          }
        }
      })
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          // Some CSS
          textTransform: 'none',
          transition: 'color .2s ease, background-color .2s ease',
          '&:hover': { bgcolor: theme.palette.secondary.main }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.light },
            '&:hover': { '.MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main } },
            '& fieldSet' : {
              borderWidth: '1px !important'
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => {
          // Some CSS
          return { color: theme.palette.primary.main, fontSize: '0.875rem' }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: alpha(theme.palette.secondary_2.main, 1)
        })
      }
    }
  }
})

export default theme