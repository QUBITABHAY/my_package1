import axios from "axios";

class QuoteCommand {
  program;

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
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      const quote = response.data?.[0];

      if (!quote) {
        console.log("Unable to fetch a quote right now.");
        return;
      }

      console.log(`${quote.q} — ${quote.a}`);
    } catch {
      console.log("Unable to fetch a quote right now.");
    }
  }
}

export default QuoteCommand;
