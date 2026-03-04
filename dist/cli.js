#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = __importDefault(require("./CLI_Engine/cli_engine"));
const greet_1 = __importDefault(require("./commands/greet"));
const init_1 = __importDefault(require("./commands/init"));
const add_1 = __importDefault(require("./commands/add"));
const subtract_1 = __importDefault(require("./commands/subtract"));
const multiply_1 = __importDefault(require("./commands/multiply"));
const divide_1 = __importDefault(require("./commands/divide"));
const time_1 = __importDefault(require("./commands/time"));
const date_1 = __importDefault(require("./commands/date"));
const joke_1 = __importDefault(require("./commands/joke"));
const pokemon_1 = __importDefault(require("./commands/pokemon"));
const engine = new cli_engine_1.default();
engine.resisterCommands([
    greet_1.default,
    init_1.default,
    add_1.default,
    subtract_1.default,
    multiply_1.default,
    divide_1.default,
    time_1.default,
    date_1.default,
    joke_1.default,
    pokemon_1.default,
]);
engine.run();
