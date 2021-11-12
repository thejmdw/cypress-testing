import React, { useState, useEffect } from 'react'
import TaskList from '../TaskList'
import AddTaskInput from '../AddTaskInput'
import { AppContainer, Title } from './index.styles'
import { v4 as generateUuid } from 'uuid'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   if (localStorage.getItem('Tasks')) {
  //     setTasks(localStorage.getItem('Tasks'))
  //   }
  // }, [])

  const toggleCompleteTask = (taskToComplete) => {
    const taskToCompleteIndex = tasks.findIndex(task => task.id === taskToComplete.id)
    const updatedTasks = [...tasks]
    updatedTasks[taskToCompleteIndex].isCompleted = !updatedTasks[taskToCompleteIndex].isCompleted
    setTasks(updatedTasks)
  }

  const addTask = (taskToAdd) => {
    const updatedTasks = [...tasks, { title: taskToAdd, id: generateUuid(), isCompleted: false }]
    setTasks(updatedTasks)
    localStorage.setItem("Tasks", JSON.stringify(updatedTasks))
  }

  const deleteTask = (taskIdToDelete) =>{
    const copyOfTasks = [...tasks]
    copyOfTasks.splice(copyOfTasks.findIndex(t => t.id === taskIdToDelete),1)
    setTasks(copyOfTasks)
  }

  const updateTask = (taskIdToUpdate, newTaskTitle) => {
    const copyOfTasks = [...tasks]
    const taskToUpdateIndex = copyOfTasks.findIndex(t => t.id === taskIdToUpdate)
    copyOfTasks[taskToUpdateIndex].title = newTaskTitle
    setTasks(copyOfTasks)
  }
  
  return (
    <AppContainer>
      <Title><WbSunnyIcon sx={{ color: '#ffc107', marginRight: '0.5rem' }} /> Today</Title>
      <TaskList tasks={tasks} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} updateTask={updateTask}/>
      <AddTaskInput addTask={addTask} />
    </AppContainer>
  );
}

export default App;
