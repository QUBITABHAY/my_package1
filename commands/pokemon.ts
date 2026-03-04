import axios from "axios";

class PokemonCommand {
  program;

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
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${String(name).toLowerCase()}`,
      );
      const { name: pokemonName, id, base_experience } = response.data;
      console.log(
        `Name: ${pokemonName}, Id: ${id}, Base Experience: ${base_experience}`,
      );
    } catch {
      console.log("Pokemon not found or API unavailable.");
    }
  }
}

export default PokemonCommand;
