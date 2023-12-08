describe('Task Management', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('allows a user to add, complete and delete a task', () => {
    // Añadir una tarea
    cy.get('input[name="newTask"]').type('New Task');
    cy.get('button').contains('Añadir Tarea').click();
    cy.get('.task').should('have.length', 1).and('contain', 'New Task');

    // Completar una tarea
    cy.get('button').contains('Completar').click();
    cy.get('.task').should('have.class', 'is-complete');

    // Deshacer una tarea
    cy.get('button').contains('Deshacer').click();
    cy.get('.task').should('have.class', 'is-not-complete');

    // Eliminar una tarea
    cy.get('button').contains('Eliminar').click();
    cy.get('.task').should('not.exist');
  });

  it('filters tasks based on completion status', () => {
    // Filtrar tarea completada
    cy.get('input[name="newTask"]').type('New Task');
    cy.get('button').contains('Añadir Tarea').click();
    cy.get('button').contains('Completar').click();
    cy.get('button').contains('Completadas').click();
    cy.get('.task.is-complete').should('be.visible');

    // Filtrar tarea pendiente
    cy.get('button').contains('Deshacer').click();
    cy.get('button').contains('Pendientes').click();
    cy.get('.task.is-not-complete').should('be.visible');

    
    // Filtrar todas las tareas
    cy.get('button').contains('Todas').click();
    cy.get('.task').should('be.visible');
  });
});