#!/usr/bin/env node

import CLI_Engine from "./CLI_Engine/cli_engine";
import GreetCommand from "./commands/Greet";

const engine = new CLI_Engine();
engine.resisterCommands([GreetCommand]);
engine.run();
