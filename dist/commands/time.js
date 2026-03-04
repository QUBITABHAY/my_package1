"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeCommand {
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
exports.default = TimeCommand;
