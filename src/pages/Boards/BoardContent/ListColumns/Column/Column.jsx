import { Box } from '@mui/material'
import ListCards from './ListCards/ListCards'
import ColumnHeader from './ColumnHeader'
import ColumnFooter from './ColumnFooter'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Column({ column }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: {
      ...column,
      type: 'COLUMN'
    } //Thêm Type để dễ phân biệt
  })

  const dndKitColumnStyles = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%', // Phải để 100% vì nếu không sẽ bị lỗi khi kéo column ngắn sang vị trí column dài, phải kéo vùng giữa
    opacity: isDragging ? 0.7 : 1
  }

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes} >
      <Box
        {...listeners}
        sx={{
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
        <ListCards cards = {orderedCards} />

        { /* Box Column Footer*/ }
        <ColumnFooter/>
      </Box></div>
  )
}

export default Column
