import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'

// import { red, cyan, orange } from '@mui/material/colors'
// import { teal, deepOrange } from '@mui/material/colors'

const my_palette_light = {
  'primary': 'rgb(10, 64, 12)',
  'secondary': 'rgb(129, 144, 103)',
  'secondary_2': 'rgb(177, 171, 134)',
  'secondary_3': 'rgb(238, 238, 238)',
  'text': 'rgb(254, 250, 224)',
  'text_secondary': 'rgb(0, 0, 0)',
  'dark': '#072C08',
  'light': '#3B663C'
}

const my_palette_dark = {
  'primary': 'rgb(33, 53, 85)',
  'secondary': 'rgb(62, 88, 121)',
  'secondary_2': 'rgb(216, 196, 182)',
  'secondary_3': 'rgb(238, 238, 238)',
  'text': 'rgb(254, 250, 224)',
  'text_secondary': 'rgb(0, 0, 0)',
  'dark': '#17253B',
  'light': '#3C61A6'
}

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
// calc(100vh - ${theme.tCustom.appBarHeight} - ${theme.tCustom.boardBarHeight})

const theme = extendTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  shape: {
    borderRadius: '8px' // 3 * 8px = 24px or use plain 12 if you prefer pixel value
  },
  tCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: my_palette_light.primary, // teal[500]
          dark: my_palette_light.dark,
          light: my_palette_light.light
        },
        secondary: {
          main: my_palette_light.secondary //deepOrange[500]
        },
        secondary_2: {
          main: my_palette_light.secondary_2 //deepOrange[500]
        },
        secondary_3: {
          main: my_palette_light.secondary_3 //deepOrange[500]
        },
        text: {
          primary: my_palette_light.text, //red[500],
          contrast: 'white',
          secondary: my_palette_light.text_secondary
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: my_palette_dark.primary, // teal[500]
          dark: my_palette_dark.dark
        },
        secondary: {
          main: my_palette_dark.secondary //deepOrange[500]
        },
        secondary_2: {
          main: my_palette_dark.secondary_2 //deepOrange[500]
        },
        secondary_3: {
          main: my_palette_dark.secondary_3 //deepOrange[500]
        },
        text: {
          primary: my_palette_dark.text, //red[500]
          contrast : 'white',
          secondary: my_palette_dark.text_secondary
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
          scrollbarColor: `${theme.palette.secondary_2.main} transparent`,
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary_2.main,
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.secondary_2.main,
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
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
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