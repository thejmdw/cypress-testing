import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  position: relative;
  &:first-child {
    margin-top: 0.25rem;
  }
  
  &:last-child {
    margin-bottom: 0.15rem;
  }
`

export const TaskTitleInput = styled.input`
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: none;
  background: transparent;
  margin-bottom: 0.1rem;
  margin-left: 0.25rem;
  width: 100%;

  ${props => props.isCompleted && `
    opacity: 0.25;
  `}
`

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  right: 0.3rem;
  color: white;
  font-weight: bold;
  background-color: #881133;
  top: 0.3rem;
  line-height: 1rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    transform: scale(0.95);
  }
`

export const EditButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  right: 0.3rem;
  color: white;
  font-weight: bold;
  background-color: #118833;
  top: 0.3rem;
  line-height: 1rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    transform: scale(0.95);
  }
`
export const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  right: 0.3rem;
  color: white;
  font-weight: bold;
  background-color: #118833;
  top: 0.3rem;
  line-height: 1rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    transform: scale(0.95);
  }
`
