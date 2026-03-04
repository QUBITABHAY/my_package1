"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class QuoteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Fetch a random motivational quote")
            .action(() => this.getQuote());
    }
    async getQuote() {
        var _a;
        try {
            const response = await axios_1.default.get("https://zenquotes.io/api/random");
            const quote = (_a = response.data) === null || _a === void 0 ? void 0 : _a[0];
            if (!quote) {
                console.log("Unable to fetch a quote right now.");
                return;
            }
            console.log(`${quote.q} — ${quote.a}`);
        }
        catch {
            console.log("Unable to fetch a quote right now.");
        }
    }
}
exports.default = QuoteCommand;
