import { Command } from "commander";

class CLI_Engine {
  program;

  constructor() {
    this.program = new Command();
  }

  resisterCommands(commands) {
    commands.forEach((cmdClass) => {
      const cmdInstance = new cmdClass(this.program);
      cmdInstance.register();
    });
  }

  run() {
    this.program.parse();
  }
}

export default CLI_Engine;
