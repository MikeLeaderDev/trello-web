import { Box } from '@mui/material'
import CardItem from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCards({ cards }) {
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx= {{
          p: '0 1px',
          m: '0 1px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) =>
            `calc(${theme.tCustom.boardContentHeight} 
              - ${theme.spacing(5)} 
              - ${theme.tCustom.colHeaderHeight}
              - ${theme.tCustom.colFooterHeight})`,
          /* Firefox */
          scrollbarWidth: 'thin',
          scrollbarColor: (theme) => `${theme.palette.secondary_3.main} transparent`, // thumb color, track color

          /* Chromium/WebKit */
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: (theme) => `${theme.palette.secondary.main} transparent`,
            borderRadius: 2,
            border: '2px solid transparent', // makes thumb slimmer
            backgroundClip: 'content-box'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: (theme) => `${theme.palette.secondary.main} transparent`
          }
        }}>
        {cards?.map((card) =>
          (<CardItem key={card._id} card={card}/>))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
