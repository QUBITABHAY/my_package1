import axios from "axios";

class JokeCommand {
  program;

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
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const { setup, punchline } = response.data;
      console.log(`${setup} - ${punchline}`);
    } catch {
      console.log("Unable to fetch a joke right now.");
    }
  }
}

export default JokeCommand;
