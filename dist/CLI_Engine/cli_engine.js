"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
    }
    resisterCommands(commands) {
        commands.forEach((cmdClass) => {
            const cmdInstance = new cmdClass(this.program);
            cmdInstance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
exports.default = CLI_Engine;
