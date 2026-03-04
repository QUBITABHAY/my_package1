#!/usr/bin/env node

import CLI_Engine from "./CLI_Engine/cli_engine";
import AddCommand from "./commands/add";
import DateCommand from "./commands/date";
import DivideCommand from "./commands/divide";
import GreetCommand from "./commands/greet";
import INIT_TS from "./commands/init";
import JokeCommand from "./commands/joke";
import MultiplyCommand from "./commands/multiply";
import PokemonCommand from "./commands/pokemon";
import QuoteCommand from "./commands/quote";
import SubtractCommand from "./commands/subtract";
import TimeCommand from "./commands/time";

const engine = new CLI_Engine();
engine.resisterCommands([
  GreetCommand,
  INIT_TS,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  TimeCommand,
  DateCommand,
  JokeCommand,
  PokemonCommand,
  QuoteCommand,
]);
engine.run();
