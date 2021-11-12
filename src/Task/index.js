import React, { useState, useRef } from 'react'
import { Container, TaskTitleInput, DeleteButton, EditButton, SaveButton } from './index.styles'
import { StyledInput } from '../AddTaskInput/index.styles'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RemoveIcon from '@mui/icons-material/Remove'

const Task = ({ task, toggleCompleteTask, deleteTask, addTask, updateTask }) => {
  const [isShown, setIsShown] = useState(false);
  const [editing, setEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState('')
  const [input, setInput] =useState(task.title)
  const inputRef = useRef()

  return (
    
    editing ? 
      <Container>
      {/* <CheckBoxOutlineBlankIcon sx={{
        color: '#fff',
        position: 'absolute',
        top: '0.5rem',
        left: '0.5rem'
      }} /> */}
      <StyledInput
        onChange={(e) => setCurrentInput(e.target.value)}
        value={currentInput}
        ref={inputRef}
        data-test-id={"task-input"}
      />
      <SaveButton
        onClick={() => {updateTask(task.id, currentInput); setEditing(false)}}
      >
        Save
      </SaveButton>
    </Container> 
    : 
    <Container 
      isCompleted={task.isCompleted}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <div data-testid='complete-task-button' onClick={() => toggleCompleteTask(task)}>
          {task.isCompleted ? 
            <CheckBoxIcon sx={{color: '#03a9f4'}} data-testid={`${task.id}-task-complete-icon`} /> : 
            <CheckBoxOutlineBlankIcon sx={{color: '#fff'}} data-testid={`${task.id}-task-not-complete-icon`} />}
      </div>
      <TaskTitleInput data-test-id={"task"} isCompleted={task.isCompleted} value={task.title} />
       <EditButton onClick={() => setEditing(true)}>
         Edit 
       </EditButton>
       {isShown && <>
       <DeleteButton onClick={() => deleteTask(task.id)}>
         <RemoveIcon data-test-id={"delete-button"}/>
        </DeleteButton>
        </>}
    </Container>
  
  )
}

export default Task