#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = __importDefault(require("./CLI_Engine/cli_engine"));
const Greet_1 = __importDefault(require("./commands/Greet"));
const engine = new cli_engine_1.default();
engine.resisterCommands([Greet_1.default]);
engine.run();
