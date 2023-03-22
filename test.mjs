import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue("Hello World"));
const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
      default() {
        return 'Doe';
      }}];

const response = await inquirer.prompt(questions);
console.log(response);