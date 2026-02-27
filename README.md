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

### 2) Add

```bash
mycli add 10 5
```

### 3) Subtract

```bash
mycli subtract 10 5
```

### 4) Multiply

```bash
mycli multiply 10 5
```

### 5) Divide

```bash
mycli divide 10 5
```

### 6) Current Time

```bash
mycli time
```

### 7) Current Date

```bash
mycli date
```

### 8) Random Joke

```bash
mycli joke
```

### 9) Pokémon Info

```bash
mycli pokemon pikachu
```

### 10) Help Command

```bash
mycli help
```

## Project Structure

```text
.
├── cli.ts          # CLI source
├── dist/           # Compiled output
├── package.json
└── tsconfig.json
```

## Notes

- The CLI executable is configured through `bin` in `package.json` as `mycli`.
- API-based commands (`pokemon`, `joke`) require an internet connection.
