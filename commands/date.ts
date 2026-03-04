class DateCommand {
  program;

  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("date")
      .description("Show current local date")
      .action(() => this.showDate());
  }

  showDate() {
    console.log(new Date().toLocaleDateString());
  }
}

export default DateCommand;
