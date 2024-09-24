import { LoginData } from "cypress/types/login";
import { userName } from "cypress/types/user";

describe("User Search", () => {
  let testData: {
    validUser: LoginData["validUser"];
  };

  before(() => {
    cy.fixture("login.json").then((data: LoginData) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit("web/index.php/auth/login");
    cy.login(testData.validUser);
    cy.checkDashboardVisibility();
  });

  it("should include the logged in dashboard  and then move to my info panel", () => {
    cy.get(".oxd-topbar-header").should("be.visible");
  });

  it("should have the personal informations", () => {
    cy.visit("web/index.php/pim/viewMyDetails");
    cy.wait(4000);
    cy.checkVisibility();
    cy.getUserInputs().then((result: userName) => {
      cy.task("setInput", result);
    });
  });

  it("should navigate to the admin search page,display the required name and then search the name ", () => {
    let searchingName = "";
    cy.visit("web/index.php/admin/viewSystemUsers");
    cy.get(".oxd-input").eq(1).should("be.visible");
    cy.task("getInput").then((result: userName) => {
      searchingName = `${result.firstName} ${result.middleName} ${result.lastName}`;
      cy.InsertValidUserInformation(searchingName);
    });
  });

  it("should navigate to the admin search page,display no records when incorrect information is provided", () => {
    let searchingName = "";
    cy.visit("web/index.php/admin/viewSystemUsers");
    cy.task("getInput").then((result: userName) => {
      searchingName = `${result.firstName} ${result.middleName} ${result.lastName}`;
      cy.InsertInvalidUserInformation(searchingName);
    });
  });
});
