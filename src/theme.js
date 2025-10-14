import { createTheme } from '@mui/material/styles';
import { red,blue,green } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
    //  main: '#b62d23ff'
        main: green[700]
    },
    secondary: {
      main: '#1c9185ff'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: red[500]
    }
  }
})

export default theme