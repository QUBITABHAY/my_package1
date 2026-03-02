"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GreetCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("greet <name>").action((name) => this.greetName(name));
    }
    greetName(name) {
        console.log(`Hello, ${name}`);
    }
}
exports.default = GreetCommand;
