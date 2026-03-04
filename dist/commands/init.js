"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { execSync } = require("child_process");
class INIT_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init-ts <foldername>")
            .action((foldername) => this.InitiliseTS(foldername));
    }
    InitiliseTS(foldername) {
        this.run(`mkdir ${foldername}`);
        this.run(`cd ${foldername}`);
        this.run(`npm init -y`);
        this.run(`npm install -D typescript ts-node nodemon @types/node`);
        this.run("npx tsc --init");
        this.run("touch index.ts");
    }
    run(cmd) {
        execSync(cmd, { stdio: "inherit" });
    }
}
exports.default = INIT_TS;
