"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiplyCommand {
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
exports.default = MultiplyCommand;
