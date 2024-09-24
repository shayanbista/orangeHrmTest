import { LoginData } from "cypress/types/login";

describe("User Delete", () => {
  let testData: {
    validUser: LoginData["validUser"];
  };

  before(() => {
    cy.fixture("login.json").then((data: LoginData) => {
      testData = data;
      cy.wait(500);
      cy.visit("web/index.php/auth/login");
      cy.login(testData.validUser);
      cy.checkDashboardVisibility();
    });
  });

  beforeEach(() => {
    cy.visit("web/index.php/admin/viewSystemUsers");
  });


  it("should user and not delete admin", () => {
    cy.deleteNonAdminUser();
  });

});
