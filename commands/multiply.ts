class MultiplyCommand {
  program;

  constructor(program) {
    this.program = program;
  }

  register() {
    this.program
      .command("multiply <a> <b>")
      .description("Multiply two numbers")
      .action((a, b) => this.multiply(a, b));
  }

  multiply(a, b) {
    const result = Number(a) * Number(b);
    console.log(result);
  }
}

export default MultiplyCommand;
