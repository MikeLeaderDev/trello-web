import { Box } from '@mui/material'
import ListCards from './ListCards/ListCards'
import ColumnHeader from './ColumnHeader'
import ColumnFooter from './ColumnFooter'

function Column({ column }) {
  return (
    <Box sx={{
      minWidth: '300px',
      maxWidth: '300px',
      bgcolor: 'secondary_3.main',
      ml: 2,
      borderRadius: 2,
      px: '8px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.tCustom.boardContentHeight} - ${theme.spacing(5)})`
    }}
    >
      { /* Box Column Header*/ }
      <ColumnHeader title={column?.title?? null} />

      { /* Box List Card*/ }
      <ListCards cards = {column?.cards?? null} />

      { /* Box Column Footer*/ }
      <ColumnFooter/>
    </Box>
  )
}

export default Column
