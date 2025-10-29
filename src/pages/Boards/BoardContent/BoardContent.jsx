import { useState } from 'react'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
// import { CardPreview, ColumnPreview } from '~/utils/dragPreview'

// import { PointerSensor } from '@dnd-kit/core'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_CARD'
}

function BoardContent({ board }) {
  // Require the mouse to move 8px before activating event
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 8 } })
  // Nhấn giữ 250ms và dung sai dưới 400px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { delay: 250, tolerance: 400 })
  // Ưu tiên sử dụng kết hợp mouseSensor và touchSensor để có trải nghiệm tốt nhất trên mobile
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  // Cùng một thời điểm chỉ có một phần tử đang được kéo là column hay là card
  const [activeDragItemId, setActiveDragItemId] = useState([])
  const [activeDragItemType, setActiveDragItemType] = useState([])
  const [activeDragItemData, setActiveDragItemData] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragStart = (event) => {
    console.log('handleDragStart: ', event)
    setActiveDragItemId(event?.active?.id)
    // Chỉ có card có key columnId, còn column thì chỉ có key column._id
    setActiveDragItemType(event?.active?.data?.current?.type === 'CARD' ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event)
    const { active, over } = event

    // Kiểm tra nếu không tồn tại Over
    if (!over) return

    // Nếu vị trí mới sau khi kéo thả khác vị trí ban đầu
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    {
      if (active.id !== over.id) {
        // console.log('Keo tha')
        // Lấy vị trí cũ từ  active.
        const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
        // Lấy vị trí mới từ thằng new Index
        const newIndex = orderedColumns.findIndex(c => c._id === over.id)
        // Dùng arrayMove Sắp xếp lại
        // Phải dùng findIndex vì Doc xếp theo id của object vào một mảng chứ không phải dạng object
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)

        // Dùng để lấy dữ liệu từ API
        // const dndOrderedCollumnsIds = dndOrderedColumns.map(c => c._id)
        // console.log('dndOrderedColumns: ', dndOrderedColumns)
        // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)

        // Set lại state cho hiển thị đúng sau khi đã kéo thả
        setOrderedColumns(dndOrderedColumns)
      }
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  // console.log(activeDragItemId)
  // console.log(activeDragItemType)
  // console.log(activeDragItemData)

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Box sx={{ bgcolor: (theme) => theme.palette.primary.main, width:'100%', height:(theme) => theme.tCustom.boardContentHeight, p:'5px 0' }}>
        <SortableContext
          items={orderedColumns.map(c => c._id)}
          strategy={horizontalListSortingStrategy}
        >
          <ListColumns columns={orderedColumns} />

          <DragOverlay dropAnimation = {dropAnimation} >
            {!activeDragItemType && null}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) &&
              <Column column={activeDragItemData}/>}
            {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) &&
              <Card card={activeDragItemData}/>}
          </DragOverlay>

        </SortableContext>
      </Box>
    </DndContext>
  )
}

export default BoardContent