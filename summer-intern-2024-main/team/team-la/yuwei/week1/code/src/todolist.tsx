import { useState } from 'react'
import './todolist.css';

interface Task {
  id: number
  text: string
  isComplete: boolean
}

export interface TaskList {
  tasks: Task[]
}

function AddButton({onAddbuttonClick}: {onAddbuttonClick: () => void}){
  return (
    <button className='Add-Button' onClick={onAddbuttonClick}>+</button>
  )
}

function DeleteButton({onDeletebuttonClick}: {onDeletebuttonClick: () => void}){
  return (
    <button className='Delete-Button' onClick={onDeletebuttonClick}>X</button>
  )
}

function SearchBar({filterText, onfilterChange}: 
    {filterText: string, onfilterChange: (filterText: string) => void}){
  
  return (
    <>
    <input type="text"  className='SearchBar' placeholder="Search..."
        value={filterText} onChange={(e) => onfilterChange(e.target.value)}/>
    </>
    
  )
}

function Task({task, onDeletebuttonClick, onTaskCompletionChange}:
    {task: Task, onDeletebuttonClick: () => void, onTaskCompletionChange: () => void}
) {
  return (
    <div className='item'>
    <tr>
        <td><input type="checkbox"  checked={task.isComplete} onChange={onTaskCompletionChange} /></td>
        <td><span className='task-text'>{task.text}</span></td>
        <td style={{textAlign: 'right'}}><DeleteButton onDeletebuttonClick={onDeletebuttonClick}/></td>
    </tr>
      
    </div>
  )
}

function TaskList({taskList, onDeletebuttonClick, onTaskCompletionChange}: 
    {taskList: TaskList, onDeletebuttonClick: (id :number) => void, onTaskCompletionChange: (id:number) => void}) {
  return (
    <div className='list'>
      {taskList.tasks.map(task => (
        <Task key={task.id} task={task} 
        onDeletebuttonClick={() => onDeletebuttonClick(task.id)}
        onTaskCompletionChange={() => onTaskCompletionChange(task.id)}/>
      ))}
    </div>
  )
}

function TaskGenerator({newTaskText, onNewTaskTextChange, onAddTask}: 
    {newTaskText: string, onNewTaskTextChange: (newTaskText: string) => void, onAddTask: (taskText: string) => void})
{
  return (
    <div className='Generator'>
      <input type="text" placeholder="Add a task..." className='task-text'
      value={newTaskText} onChange={(e) => {onNewTaskTextChange(e.target.value)}}/>
      <AddButton onAddbuttonClick={() => onAddTask(newTaskText)}/>
    </div>
  )
}



export function TodoList({retrievedTaskList}: {retrievedTaskList: TaskList}){
    
    const [taskList, setTaskList] = useState(retrievedTaskList)
    const [filterText, setFilterText] = useState('')
    const [newTaskText, setNewTaskText] = useState('')
    const [totalTaskCount, setTotalTaskCount] = useState(retrievedTaskList.tasks.length)


    const filteredTaskList = {
        tasks: taskList.tasks.filter(task => task.text.includes(filterText))
    } //filtered text only change when filterText changes

    function handleAddNewTask(taskText: string) {
        const newTask = {
            id: totalTaskCount + 1,
            text: taskText,
            isComplete: false,
        }
        const newTaskList = {
            tasks: [...taskList.tasks, newTask]
        }
        setTaskList(newTaskList)
        setTotalTaskCount(totalTaskCount + 1)
    }
    function handleDeleteTask(id: number) {
        const newTaskList = {
            tasks: taskList.tasks.filter(task => task.id !== id)
        }
        setTaskList(newTaskList)
    }
    function handleTaskCompletionChange(id: number) {
        //Should I seperate complete state from taskList?
        //What would be the overhead?
        const newTaskList = {
            tasks: taskList.tasks.map(task => {
                if (task.id === id) {
                    return {...task, isComplete: !task.isComplete}
                }
                return task
            })
        }
        setTaskList(newTaskList)
    }
    
    // function deleteTask(id: number) {
    //     let newTaskList = taskList.tasks.filter(task => task.id !== id) //It does not mutate the array, it creates a new array
    //     setTaskList({tasks: newTaskList})    
    //     }
    
    // function getfilteredTaskList(taskList: TaskList) {
    //     const filteredTaskList = {
    //         tasks: taskList.tasks.filter(task => task.text.includes(filterText))
    //     }
    //     return filteredTaskList
    // }

    return (
        <div>
        <SearchBar filterText={filterText} onfilterChange={setFilterText}/>
        <TaskGenerator newTaskText={newTaskText} onNewTaskTextChange={setNewTaskText} onAddTask={handleAddNewTask}/>
        <TaskList taskList={filteredTaskList} 
        onDeletebuttonClick={handleDeleteTask}
        onTaskCompletionChange={handleTaskCompletionChange}/>
        </div>
    )
}
