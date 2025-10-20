// Boards list
import { Container } from '@mui/material'
import AppBar from '../../components/AppBar'
import BoardBar from '../Boards/BoardBar'
import BoardContent from '../Boards/BoardContent'


function Board() {
  return (
    <>
      <Container disableGutters maxWidth = {false} sx= {{ height: '100vh', backgroundColor: 'primary.main' }}>
        <AppBar/>
        <BoardBar/>
        <BoardContent/>
      </Container>

    </>
  )
}

export default Board