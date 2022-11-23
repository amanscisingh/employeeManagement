describe('login_add_employee', () => {
    const name = 'Ramsey';
    const email = 'ramsey@t.com';
    
    it('admin can add employeee', () => {
        // hit the / url
        cy.visit('http://localhost:3000/');

        // login
        cy.findByRole('textbox').type('test@t.com');
        cy.findByPlaceholderText(/enter password/i).type('abcd1234');
        cy.findByRole('button', { name: /sign in/i }).click();

        // move to add employee panel
        cy.findByRole('button', {  name: /add employee/i}).click();
    
        // type new employee details
        cy.get('[data-cy="employeeNameField"]').type(name);
        cy.get('[data-cy="employeeEmailField"]').type(email);
        cy.get('[data-cy="employeePassField"]').type("1234");
        cy.get('[data-cy="employeeContactField"]').type("9876567689");        
        cy.get('[data-cy="employeeJoiningField"]').click();
        cy.get('[data-cy="employeeJoiningField"]').type('2022-11-22');
        cy.get('[data-cy="employeeDeptField"]').select('technical');
        
        // click add employee
        cy.get('[data-cy="addEmployeeButton"]').click();
        
        // got to dashboard 
        cy.reload();
        
        // relogin
        cy.findByRole('textbox').type('test@t.com');
        cy.findByPlaceholderText(/enter password/i).type('abcd1234');
        cy.findByRole('button', { name: /sign in/i }).click();

        const formattedName = '/' + name + ' ✅' + '/i';
        cy.wait(2000);

        // make sure the employee you created exists in the table rendered
        cy.findByRole('cell', {  name: formattedName }).should('exist');
    })
    
    
})