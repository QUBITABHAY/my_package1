class AddCommand {
  program;

  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("add <a> <b>")
      .description("Add two numbers")
      .action((a, b) => this.add(a, b));
  }

  add(a, b) {
    const result = Number(a) + Number(b);
    console.log(result);
  }
}

export default AddCommand;
