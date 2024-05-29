#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//display a colorful welcome message
console.log("*".repeat(60));
console.log(chalk.bold.magentaBright("\n\t\tcode with sidra - Word Counter\n"));
console.log("*".repeat(60));
//prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//Triming the sentence and splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold.blueBright("> Sentence Words:"));
console.log(words);
console.log(chalk.bold.blueBright(`\n > Word Count: ${chalk.bold.yellowBright(words.length)}`));
console.log("=".repeat(60));
