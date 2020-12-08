describe("Page testing max resolution", () => {
  before(() => {
    cy.server();
    cy.route(
      "YOUR_DATABASE_URL/api/products/",
      "fixture:ProductData.json"
    ).as("getProducts");
    cy.route(
      "YOUR_DATABASE_URL/api/product/10",
      "fixture:Product2B.json"
    );
  });

  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("/");
    cy.wait(1000);
  });

  it("Home page", () => {
    cy.get('[data-cy="full decription 10"]').click();
    cy.wait(500);
    cy.get('[data-cy-cart="10"]').click();
    cy.get('[data-cy-comparison="10"]').click();
    cy.get('[data-cy="cart badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "1");
    cy.get('[data-cy="comparison badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "1");
    cy.document().toMatchImageSnapshot();
    cy.get('[data-cy="home link"]').click();
    cy.wait(500);
    cy.document().toMatchImageSnapshot();
  });

  it("Chat", () => {
    cy.get(".rcw-launcher").click();
    cy.get("input.rcw-new-message").type("Hello! I am a customer{enter}");
    cy.get(".rcw-launcher").click();
    cy.get(".rcw-launcher").click();
    cy.get("input.rcw-new-message").type("Hello! I am a customer");
    cy.get(".rcw-send").click();
    cy.document().toMatchImageSnapshot();
    cy.get(".rcw-launcher").click();
    cy.document().toMatchImageSnapshot();
  });

  it("Cart page", () => {
    cy.get('[data-cy-cart="10"]').click();
    cy.get('[data-cy-cart="11"]').click();
    cy.get('[data-cy-page="cart"]').click();
    cy.get('[data-cy="increase 10"]')
      .click()
      .click();
    cy.get('[data-cy="increase 11"]').click();
    cy.get('[data-cy="total"]')
      .invoke("text")
      .should("eq", "Total: 160");
    cy.get('[data-cy="shipping"]').click();
    cy.get('[data-cy="total"]')
      .invoke("text")
      .should("eq", "Total: 165");
    cy.get('[data-cy="decrease 10"]')
      .click()
      .click();
    cy.get('[data-cy="decrease 11"]').click();
    cy.get('[data-cy="total"]')
      .invoke("text")
      .should("eq", "Total: 70");
    cy.get('[data-cy="cart badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "2");
    cy.get('[data-cy-comparison="10"]').click();
    cy.get('[data-cy-comparison="11"]').click();
    cy.get('[data-cy="comparison badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "2");
    cy.get('[data-cy-cart="10"]').click();
    cy.get('[data-cy="cart badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "1");
    cy.get('[data-cy="total"]')
      .invoke("text")
      .should("eq", "Total: 40");
    cy.get('[data-cy="shipping"]').click();
    cy.get('[data-cy="total"]')
      .invoke("text")
      .should("eq", "Total: 35");
    cy.document().toMatchImageSnapshot();
    cy.get('[data-cy-cart="11"]').click();
    cy.document().toMatchImageSnapshot();
  });

  it("Comparison page", () => {
    cy.get('[data-cy-comparison="10"]').click();
    cy.get('[data-cy-comparison="11"]').click();
    cy.get('[data-cy-page="comparison"]').click();
    cy.get('[data-cy="comparison badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "2");
    cy.get('[data-cy-cart="10"]')
      .eq(1)
      .click();
    cy.get('[data-cy-cart="11"]')
      .eq(1)
      .click();
    cy.get('[data-cy="cart badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "2");
    cy.get('[data-cy-comparison="11"]')
      .eq(1)
      .click();
    cy.get('[data-cy="comparison badge"]')
      .children("span > span")
      .invoke("text")
      .should("eq", "1");
    cy.document().toMatchImageSnapshot();
    cy.get('[data-cy-comparison="10"]')
      .eq(1)
      .click();
    cy.document().toMatchImageSnapshot();
  });

  it("Contacts page", () => {
    cy.get('[data-cy-page="contacts"]').click();
    cy.wait(1500);
    cy.document().toMatchImageSnapshot();
  });
});
