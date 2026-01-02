import './App.css'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <Navbar />
      <div className='flex flex-col w-[500px] mx-auto items-center mt-[32px]'>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
