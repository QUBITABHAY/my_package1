"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .description("Fetch a random joke")
            .action(() => this.getJoke());
    }
    async getJoke() {
        try {
            const response = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            const { setup, punchline } = response.data;
            console.log(`${setup} - ${punchline}`);
        }
        catch {
            console.log("Unable to fetch a joke right now.");
        }
    }
}
exports.default = JokeCommand;
