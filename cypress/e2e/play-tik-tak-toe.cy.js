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

  // describe("play tic-tac-toe and O wins", () => {
  //   it("visit url", () => {
  //       cy.visit("http://localhost:3000");
  //   });

  //   it("O wins", () => {
  //       const firstSquare = cy.get('button[data-testid="cell-0"]');
  //       const secondSquare = cy.get('button[data-testid="cell-1"]');
  //       const fourthSquare = cy.get('button[data-testid="cell-3"]');
  //       const fifthSquare = cy.get('button[data-testid="cell-4"]');
  //       const thirdSquare = cy.get('button[data-testid="cell-2"]');
  //       const eighthSquare = cy.get('button[data-testid="cell-7"]');

  //       firstSquare.click();
  //       secondSquare.click();
  //       fourthSquare.click();
  //       fifthSquare.click();
  //       thirdSquare.click();
  //       eighthSquare.click();
  //       cy.get('div[data-testid="status"]').contains("O wins!");
  //   });
  // });

  // describe("play tic-tac-toe and draw", () => {
  //   it("visit url", () => {
  //       cy.visit("http://localhost:3000");
  //   });

  //   it("draw", () => {
  //       const firstSquare = cy.get('button[data-testid="cell-0"]');
  //       const secondSquare = cy.get('button[data-testid="cell-1"]');
  //       const thirdSquare = cy.get('button[data-testid="cell-2"]');
  //       const fourthSquare = cy.get('button[data-testid="cell-3"]');
  //       const fifthSquare = cy.get('button[data-testid="cell-4"]');
  //       const sixthSquare = cy.get('button[data-testid="cell-5"]');
  //       const seventhSquare = cy.get('button[data-testid="cell-6"]');
  //       const eighthSquare = cy.get('button[data-testid="cell-7"]');
  //       const ninthSquare = cy.get('button[data-testid="cell-8"]');

  //       firstSquare.click();
  //       fifthSquare.click();
  //       thirdSquare.click();
  //       secondSquare.click();
  //       eighthSquare.click();
  //       fourthSquare.click();
  //       sixthSquare.click();
  //       ninthSquare.click();
  //       seventhSquare.click();
  //       cy.get('div[data-testid="status"]').contains("It's a draw!");
  //   });
});
