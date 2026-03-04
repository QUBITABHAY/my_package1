"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubtractCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("subtract <a> <b>")
            .description("Subtract second number from first")
            .action((a, b) => this.subtract(a, b));
    }
    subtract(a, b) {
        const result = Number(a) - Number(b);
        console.log(result);
    }
}
exports.default = SubtractCommand;
