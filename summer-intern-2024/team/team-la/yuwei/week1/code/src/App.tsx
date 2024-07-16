import { useState } from 'react'
import './App.css'
import { TodoList ,TaskList} from './todolist'

let retrievedTaskList: TaskList = {
  tasks: [
    { id: 0, text: 'Learn React', isComplete: false},
    { id: 1, text: 'Learn TypeScript', isComplete: false},
    { id: 2, text: 'Build Something Awesome', isComplete: false},
    { id: 3, text: 'Learn Vite', isComplete: false}
  ]
}

function App() {
  return (
    <>
      <TodoList retrievedTaskList={retrievedTaskList}/>
    </>
  )
}

export default App
