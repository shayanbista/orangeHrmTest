import { InsertNameField } from "cypress/utils/inserNameFIeld";

// command to check the existing panel
Cypress.Commands.add("CheckPanelResult", () => {
  const menuItems = [
    "Admin",
    "PIM",
    "Leave",
    "Time",
    "Recruitment",
    "My Info",
    "Performance",
    "Dashboard",
    "Directory",
    "Maintenance",
    "Claim",
    "Buzz",
  ];

  const randomIndex = Math.floor(Math.random() * menuItems.length);
  const randomMenuItem = menuItems[randomIndex];

  InsertNameField(randomMenuItem, 0);
});

// command to display the emppty screen when nonexisting data is provided
Cypress.Commands.add("Empoty PanelResult", () => {
  InsertNameField("money", 0);
});
