"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PokemonCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("pokemon <name>")
            .description("Fetch Pokemon details by name")
            .action((name) => this.getPokemon(name));
    }
    async getPokemon(name) {
        try {
            const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${String(name).toLowerCase()}`);
            const { name: pokemonName, id, base_experience } = response.data;
            console.log(`Name: ${pokemonName}, Id: ${id}, Base Experience: ${base_experience}`);
        }
        catch {
            console.log("Pokemon not found or API unavailable.");
        }
    }
}
exports.default = PokemonCommand;
