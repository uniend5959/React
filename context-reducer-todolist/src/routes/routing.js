
import { createBrowserRouter } from 'react-router-dom'
import Mainpage from '../pages'
import Todolist from '../pages/todo/todolist'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainpage/>
  },
  {
    path: '/:category',
    element : <Todolist/>
  }
])

export default router