import { useState } from 'react'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }))

  const handleDragEnd = (event) => {
    console.log('handleDragEnd: ', event)
    const { active, over } = event

    // Kiểm tra nếu không tồn tại Over
    if (!over) return

    // Nếu vị trí mới sau khi kéo thả khác vị trí ban đầu
    if (active.id !== over.id) {
      console.log('Keo tha')
      // Lấy vị trí cũ từ  active.
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // Lấy vị trí mới từ thằng new Index
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      // Dùng arrayMove Sắp xếp lại
      // Phải dùng findIndex vì Doc xếp theo id của object vào một mảng chứ không phải dạng object
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

      // const dndOrderedCollumnsIds = dndOrderedColumns.map(c => c._id)
      console.log('dndOrderedColumns: ', dndOrderedColumns)

      // Set lại state cho hiển thị đúng sau khi đã kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Box sx={{ bgcolor: (theme) => theme.palette.primary.main, width:'100%', height:(theme) => theme.tCustom.boardContentHeight, p:'5px 0' }}>
        <SortableContext
          items={orderedColumns.map(c => c._id)}
          strategy={horizontalListSortingStrategy}
        >
          <ListColumns columns={orderedColumns} />
        </SortableContext>
      </Box>
    </DndContext>
  )
}

export default BoardContent