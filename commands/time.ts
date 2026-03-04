class TimeCommand {
  program;

  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("time")
      .description("Show current local time")
      .action(() => this.showTime());
  }

  showTime() {
    console.log(new Date().toLocaleTimeString());
  }
}

export default TimeCommand;
