describe('play tic-tac-toe', () => {
  it('should display the initial game board', () => {
    cy.visit('/'); // Assuming app runs on port: 5173

    cy.get('.square').should('have.length', 9);

    cy.get('.square').each(($square) => {
      expect($square.text()).to.equal(''); // Check for empty squares
    });
  });

  it('status is rendered', () => {
    cy.visit('/');
    cy.get('div[data-testid="next-player"]').contains('Next Player: X');
  });

  it('should allow a player to make a move and update the board', () => {
    cy.visit('/');

    cy.get('.square').first().click(); // Click the first square

    cy.get('.square').first().should('have.text', 'X'); // Verify X is displayed

    cy.get('.status').should('contain', 'Next Player: O'); // Verify status update
  });

  it('should not allow a player to make a move on a filled square', () => {
    cy.visit('/');

    cy.get('.square').first().click(); // Click the first square

    cy.get('.square').first().click(); // Click the same square again

    cy.get('.status').should('be.visible'); // Assert element is visible

    cy.get('.status').should('contain', 'Next Player: O'); // Verify status remains unchanged
  });

  it('play tik tak toe and X wins', () => {
    cy.visit('/');

    const firstSquare = cy.get('.square').eq(0);
    const seventhSquare = cy.get('.square').eq(6);
    const secondSquare = cy.get('.square').eq(1);
    const ninthSquare = cy.get('.square').eq(8);
    const thirdSquare = cy.get('.square').eq(2);

    firstSquare.click();
    seventhSquare.click();
    secondSquare.click();
    ninthSquare.click();
    thirdSquare.click();

    cy.get('.status').should('contain', 'Winner: X');
  });

  it('play tik tak toe and O wins', () => {
    cy.visit('/');

    const firstSquare = cy.get('.square').eq(0);
    const secondSquare = cy.get('.square').eq(1);
    const fourthSquare = cy.get('.square').eq(3);
    const fifthSquare = cy.get('.square').eq(4);
    const thirdSquare = cy.get('.square').eq(2);
    const eighthSquare = cy.get('.square').eq(7);

    firstSquare.click();
    secondSquare.click();
    fourthSquare.click();
    fifthSquare.click();
    thirdSquare.click();
    eighthSquare.click();

    cy.get('.status').should('contain', 'Winner: O');
  });

  it('should allow jumping to previous moves using the move history', () => {
    cy.visit('/');

    // Simulate making some moves
    cy.get('.square').eq(0).click(); // Click first square
    cy.get('.square').eq(4).click(); // Click fifth square
    cy.get('.square').eq(1).click(); // Click second square

    // Click on a move in the history to go back
    cy.get('.game-info button').contains('Go to move #1').click(); // Replace with actual selector

    // Verify board state after going back
    cy.get('.square').eq(0).should('have.text', 'X'); // First move remains
    cy.get('.square').eq(1).should('have.text', ''); // Second move not made yet
    cy.get('.square').eq(4).should('not.have.text', 'O'); // Fifth move not made yet
    cy.get('.status').should('contain', 'Next Player: O'); // Status update

    cy.get('.game-info ol li').first().click(); // Go to game start
    cy.get('.square').eq(0).should('be.empty'); // Square should be empty again
  });
});
