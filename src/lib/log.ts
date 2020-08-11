import chalk from "chalk";

function action(text: string, prefix: string = "Action - ") {
  console.log(chalk.green(`${prefix}${text}`));
}

function execution(text: string, prefix: string = "Execution - ") {
  console.log(chalk.blue(`${prefix}${text}`));
}

function service(text: string, prefix: string = "Service - ") {
  console.log(chalk.yellow(`${prefix}${text}`));
}

function repository(text: string, prefix: string = "Repository - ") {
  console.log(chalk.cyan(`${prefix}${text}`));
}

function lib(text: string, prefix: string = "Lib - ") {
  console.log(chalk.white(`${prefix}${text}`));
}

function config(text: string, prefix: string = "Config - ") {
  console.log(chalk.blueBright(`${prefix}${text}`));
}

function error(text: string, prefix: string = "Error - ") {
  console.log(chalk.red(`${prefix}${text}`));
}

function middleware(text: string, prefix: string = "Middleware - ") {
  console.log(chalk.greenBright(`${prefix}${text}`));
}

export default {
  action,
  execution,
  service,
  repository,
  lib,
  config,
  error,
  middleware,
};
