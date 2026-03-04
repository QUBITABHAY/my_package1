# my_package

A simple Node.js CLI tool powered by `commander` and `axios`.

## Features

- Basic math commands: add, subtract, multiply, divide
- Greeting command
- Date and time helpers
- Random joke fetcher
- Pokémon info lookup (via PokeAPI)

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Installation

Install dependencies:

```bash
npm install
```

Build TypeScript to JavaScript:

```bash
npx tsc
```

Link globally so the `mycli` command is available:

```bash
npm link
```

## Usage

General command format:

```bash
mycli <command> [arguments]
```

Show built-in help:

```bash
mycli --help
```

## Commands

### 1) Greet

```bash
mycli greet Abhay
```

### 2) Init TypeScript Project

```bash
mycli init-ts my-new-app
```

### 3) Add

```bash
mycli add 10 5
```

### 4) Subtract

```bash
mycli subtract 10 5
```

### 5) Multiply

```bash
mycli multiply 10 5
```

### 6) Divide

```bash
mycli divide 10 5
```

### 7) Current Time

```bash
mycli time
```

### 8) Current Date

```bash
mycli date
```

### 9) Random Joke

```bash
mycli joke
```

### 10) Pokémon Info

```bash
mycli pokemon pikachu
```

### 11) Help Command

```bash
mycli help
```

## Project Structure

```text
.
├── cli.ts                 # CLI source
├── CLI_Engine/
│   └── cli_engine.ts      # CLI engine wrapper
├── commands/              # Command classes
│   ├── add.ts
│   ├── date.ts
│   ├── divide.ts
│   ├── greet.ts
│   ├── init.ts
│   ├── joke.ts
│   ├── multiply.ts
│   ├── pokemon.ts
│   ├── subtract.ts
│   └── time.ts
├── dist/                  # Compiled output
├── package.json
├── README.md
└── tsconfig.json
```

## Notes

- The CLI executable is configured through `bin` in `package.json` as `mycli`.
- API-based commands (`pokemon`, `joke`) require an internet connection.
