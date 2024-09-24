import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 60000,
    baseUrl: "https://opensource-demo.orangehrmlive.com/",

    setupNodeEvents(
      on: (
        arg0: string,
        arg1: {
          // Task to set inputs
          setInput(inputs: Record<string, string>): null;
          // Task to get inputs
          getInput(): Record<string, string>;
        },
      ) => void,
      config: any,
    ) {
      let storedInputs: Record<string, string> = {};

      // Register custom tasks
      on("task", {
        setInput(inputs: Record<string, string>) {
          storedInputs = { ...inputs };
          return null;
        },
        getInput() {
          return storedInputs;
        },
      });

      return config;
    },
  },
});
