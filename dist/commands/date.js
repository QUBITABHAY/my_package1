"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateCommand {
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
exports.default = DateCommand;
