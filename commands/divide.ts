class DivideCommand {
  program;

  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("divide <a> <b>")
      .description("Divide first number by second")
      .action((a, b) => this.divide(a, b));
  }

  divide(a, b) {
    const denominator = Number(b);
    if (denominator === 0) {
      console.log("Cannot divide by zero");
      return;
    }

    const result = Number(a) / denominator;
    console.log(result);
  }
}

export default DivideCommand;
