import { Outlet } from 'react-router-dom'
import Navbar from './navbar/navbar'
import NoteState from './context/noteState'

function App() {

  
  return (
    <div className='container mx-auto'>
     <NoteState>
     <Navbar></Navbar>
     <Outlet></Outlet>
     </NoteState>
    </div>
  )
}

export default App
