import { LoginData } from "cypress/types/login";

describe("User Search", () => {
  let testData: {
    validUser: LoginData["validUser"];
  };

  before(() => {
    cy.fixture("login.json").then((data: LoginData) => {
      testData = data;
    });
    cy.visit("web/index.php/auth/login");
    cy.login(testData.validUser);
    cy.checkDashboardVisibility();
  });

  beforeEach(() => {
    cy.visit("web/index.php/auth/login");
    cy.login(testData.validUser);
    cy.checkDashboardVisibility();
  });

  it("should display the searched name on the side panel", () => {
    cy.CheckPanelResult();
  });

  it("should display empty on the side panel", () => {
    cy.CheckPanelResult();
  });
});
