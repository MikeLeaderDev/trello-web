import { createTheme } from '@mui/material/styles';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { red,blue,green } from '@mui/material/colors';

// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//     //  main: '#b62d23ff'
//         main: green[700]
//     },
//     secondary: {
//       main: '#1c9185ff'
//     },
//     error: {
//       main: red.A400
//     },
//     text: {
//       secondary: red[500]
//     }
//   }
// })

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252'
       }
     }
   },
   dark: {
     palette: {
       primary: {
         main: '#1c9185ff'
       }
      }
    }
  },
    text: {
        secondary: red[500]
    }
});

export default theme