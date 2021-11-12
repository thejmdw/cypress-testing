import todoFactory from '../factories/todo'

describe('Tasklist', () => {
  //Before Each Test - - Visit App 
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  // it('should be able to create a single task when task title is entered and "Add" is clicked', () => {
  //   // Arrange
  //   const expectedTaskTitle = 'Buy oat milk'

  //   // Act
  //   cy.findByPlaceholderText('New task...').type(expectedTaskTitle)
  //   cy.findByText('Add').click()

  //   // Assert
  //   cy.get('input').should('have.value', expectedTaskTitle)
  // })

  // it('should be able to create multiple tasks when task title is entered and "Add" is clicked', () => {
  //   // Arrange
  //   const expectedTasks = todoFactory.buildList(5)

  //   // Act
  //   expectedTasks.forEach((todo) => {
  //     cy.findByPlaceholderText('New task...').type(todo)
  //     cy.findByText('Add').click()
  //   })

  //   // Assert
  //   cy.get('input').should('have.value', expectedTasks[0])
  // })

  // it('should be able to complete a single task when the checkbox is clicked', () => {
  //   // Arrange
    // const expectedTasks = todoFactory.buildList(1)
    // cy.findByPlaceholderText('New task...').type(expectedTasks[0])

  //   // Act
  //   cy.findByText('Add').click()
  //   cy.findByTestId('complete-task-button').click()

  //   // Assert
  //   cy.findByTestId(/task-not-complete-icon/i).should('not.exist')
  //   cy.findByTestId(/task-complete-icon/i).should('exist')
  // })

  // it('should create a single task when task title is entered and the "Enter" key is pressed', () => {
  //   //Arrange
  //   const expectedTaskTitle = 'Buy oat milk'
  
  //   //Act
  //   cy.findByPlaceholderText('New task...').type(expectedTaskTitle + '{enter}')

  //   //Assert
  //   cy.get('[data-test-id="task"]').should('have.value', expectedTaskTitle)
  // })

  // it('should delete the task when the task is hovered over, the delete button is revealed, and the delete button is clicked', () => {
  //   //Arrange
  //   const expectedTaskTitle = 'Buy oat milk'

  //   //Act
  //   cy.findByPlaceholderText('New task...').type(expectedTaskTitle + '{enter}')
  //   cy.get('[data-test-id="task"]').trigger('mouseover')
  //   cy.get('[data-test-id="delete-button"]').click()
    
  //   //Assert
  //   cy.get('[data-test-id="task"]').should('not.exist')
  // })   

  it('should update the task title when task is edited and the edit button is clicked', () => {
    //Arrange
    const taskTitle = 'Buy oat milk'
    const updatedTaskTitle = 'Walk the dog'

    //Act
    cy.findByPlaceholderText('New task...').type(taskTitle)
    cy.findByText('Add').click()
    cy.get('[data-test-id="task"]').trigger('mouseover')
    cy.findByText('Edit').click()
    cy.get('[data-test-id="task-input"]').type(updatedTaskTitle)
    cy.findByText('Save').click()

    //Assert
    cy.get('input').should('not.have.value', taskTitle)
    cy.get('input').should('have.value', updatedTaskTitle)

  })
})

// it('should reload the tasks saved to localStorage when the page is left or reloaded', () => {
//   //Arrange
//   const taskTitle = 'Buy some oat milk'
//   //Act
//   cy.findByPlaceholderText('New task...').type(taskTitle)
//   cy.findByText('Add').click()
//   cy.visit('https://www.google.com')
//   // eslint-disable-next-line cypress/no-unnecessary-waiting
//   cy.wait(4000)
//   cy.visit('localhost.3000/')
//   //Assert
//   cy.get('input').should('have.value', taskTitle)
//   })
// })