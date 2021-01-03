beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("e2e generics suite for tinynws react frontend", function () {


  it("Should have a header", function () {
       cy.get(".main-headings").find("h1").should("have.text", "Tiny NeoWS");
  });

  it("Should have a starting page number (default = 1).", function () {
       cy.get("blockquote").should("have.text", "page 1");
  });

  it("Should fetch at least one element from the API.", function () {
       cy.get(".container")
      .find("ul")
      .should(($ul) => {
        if ($ul.length !== 1) {
          throw new Error("No item list from API.");
        }
      });
  });

  it("Should loading while requesting to API.", function () {
       cy.get(".container")
      .find(".loading-text")
      .should("have.text", "Fetching data, please wait.");
  });

  it("Paginator component should have page numbers in navigation.", function () {
       cy.get(".container-paging-controls")
      .find(".container-paging-controls-numbers")
      .should("have.text", "1");
  });

  it("Paginator component should have active controls in navigation.", function () {
       cy.get(".container-paging-controls")
      .find(".container-paging-controls-arrow")
      .should("be.visible")
      .click({ multiple: true });
  });

  it("Should go to detail page if list item is clicked.", function () {
       cy.get(".container-card:first")
      .click()
      .get(".container-card-detail")
      .should("be.visible")
  });

  it("Detail page should contain a nasa jpl url.", function() {
       cy.get(".container-card:first")
        .click()
        .get(".container-card-detail")
        .find("a[name='nasa-api-url']")
        .should("not.be.empty");
  });

  it("Should come back from detail page when click back button.", function() {
       cy.get(".container-card:first")
        .click()
        .get(".back-button")
        .should('be.visible').click()
        .get('.container-card')
  });
});
