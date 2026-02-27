#!/usr/bin/env node
const {Command} = require('commander')
const axios = require('axios')
const program = new Command()

program
.command('greet <name>')
.action((name) => {
  console.log(`Hello, ${name}!`)
})

program
.command('add <num1> <num2>')
.description('Add two numbers')
.action((num1, num2) => {
  const sum = Number(num1) + Number(num2)
  console.log(`The sum is: ${sum}`)
})

program
.command('subtract <num1> <num2>')
.description('Subtract two numbers')
.action((num1, num2) => {
  const diff = Number(num1) - Number(num2)
  console.log(`The difference is: ${diff}`)
})

program
.command('multiply <num1> <num2>')
.description('Multiply two numbers')
.action((num1, num2) => {
  const product = Number(num1) * Number(num2)
  console.log(`The product is: ${product}`)
})

program
.command('divide <num1> <num2>')
.description('Divide two numbers')
.action((num1, num2) => {
  if (Number(num2) === 0) {
    console.log('Error: Division by zero')
    return
  }
  const answer = Number(num1) / Number(num2)
  console.log(`The answer is: ${answer}`)
})

program
.command("help")
.description("Show help information")
.action(() => {
  program.help()
})


program
.command("pokemon <name>")
.description("Get information about a Pokemon")
.action(async (name) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    console.log(`Name: ${res.data.name}`)
    console.log(`ID: ${res.data.id}`)
    console.log(`Height: ${res.data.height}`)
    console.log(`Weight: ${res.data.weight}`)
  } catch (err) {
    console.error("Error fetching Pokemon data:", err)
  }
})


program
.command("time")
.description("Show current time")
.action(() => {
  const now = new Date()
  console.log(`Current time: ${now.toLocaleTimeString()}`)
})

program
.command("date")
.description("Show current date")
.action(() => {
  const now = new Date()
  console.log(`Current date: ${now.toLocaleDateString()}`)
})


program
.command("joke")
.description("Tell a random joke")
.action(async() => {
    try{
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke")

        console.log(res.data.setup)
        console.log(res.data.punchline)
    }catch(err){
        console.error("Error fetching joke:", err)
    }
})


program.parse(process.argv)