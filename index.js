#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import degit from "degit";

// TODO: Replace with your GitHub username and repository name
const GITHUB_REPO = "ohk-soe-htet/react-templates";

// Hardcode the available templates
const basicTemplates = ["cra", "cra-ts", "cra_lint", "vite", "vite-ts"];
const expansionTemplates = ["cra_full", "cra_redux", "cra-ts_redux"];

async function run() {
	console.log(chalk.blue("Creating a new React app..."));

	const args = process.argv.slice(2);
	let projectName = null;
	let chosenTemplate = null;

	const basicFlagIndex = args.findIndex((arg) => arg === "--basic");
	const expansionsFlagIndex = args.findIndex((arg) => arg === "--expansions");

	if (basicFlagIndex !== -1 && args[basicFlagIndex + 1]) {
		const templateName = args[basicFlagIndex + 1];
		chosenTemplate = path.join("basic", templateName);
		projectName = args.filter(
			(_, i) => i !== basicFlagIndex && i !== basicFlagIndex + 1
		)[0];
	} else if (expansionsFlagIndex !== -1 && args[expansionsFlagIndex + 1]) {
		const templateName = args[expansionsFlagIndex + 1];
		chosenTemplate = path.join("expansions", templateName);
		projectName = args.filter(
			(_, i) => i !== expansionsFlagIndex && i !== expansionsFlagIndex + 1
		)[0];
	} else if (args.length > 0 && !args[0].startsWith("--")) {
		projectName = args[0];
	}

	if (!projectName) {
		console.error(chalk.red("Please specify the project directory:"));
		console.log(
			`  ${chalk.cyan("npx @ohk/react-template")} ${chalk.green(
				"<project-directory>"
			)}`
		);
		console.log();
		console.log("Options:");
		console.log(
			`  ${chalk.cyan(
				"--basic <template>"
			)}     Specify a template from the 'basic' category.`
		);
		console.log(
			`  ${chalk.cyan(
				"--expansions <template>"
			)} Specify a template from the 'expansions' category.`
		);
		console.log();
		console.log("For example:");
		console.log(
			`  ${chalk.cyan("npx @ohk/react-template")} ${chalk.green(
				"my-app"
			)} --basic cra`
		);
		process.exit(1);
	}

	const targetDir = path.resolve(process.cwd(), projectName);
	if (fs.existsSync(targetDir)) {
		console.error(chalk.red(`Directory ${projectName} already exists.`));
		process.exit(1);
	}

	if (!chosenTemplate) {
		const { templateCategory } = await inquirer.prompt([
			{
				type: "list",
				name: "templateCategory",
				message: "Which type of template would you like?",
				choices: ["basic", "expansions"],
				loop: false,
			},
		]);

		const templateChoices =
			templateCategory === "basic" ? basicTemplates : expansionTemplates;

		const { selectedTemplate } = await inquirer.prompt([
			{
				type: "list",
				name: "selectedTemplate",
				message: "Which template would you like to use?",
				choices: templateChoices,
				loop: false,
			},
		]);
		chosenTemplate = path.join(templateCategory, selectedTemplate);
	}

	const templateSource = `${GITHUB_REPO}/${chosenTemplate}`;

	console.log(`\nCreating a new React app in ${chalk.green(targetDir)}.`);
	console.log(
		`Using template: ${chalk.cyan(chosenTemplate)} from ${chalk.cyan(
			GITHUB_REPO
		)}\n`
	);

	try {
		const emitter = degit(templateSource, {
			cache: false,
			force: true,
		});

		await emitter.clone(targetDir);
	} catch (error) {
		console.error(chalk.red(`Error cloning template: ${error.message}`));
		process.exit(1);
	}

	console.log(chalk.green("Success! Created project at " + projectName));
	console.log("Inside that directory, you can run several commands:");
	console.log();
	console.log(chalk.cyan("  npm install"));
	console.log("    Installs dependencies.");
	console.log();
	console.log(chalk.cyan("  npm start"));
	console.log("    Starts the development server.");
	console.log();
	console.log("We suggest that you begin by typing:");
	console.log();
	console.log(chalk.cyan("  cd"), projectName);
	console.log(`  ${chalk.cyan("npm install")}`);
	console.log();
}

run().catch((error) => {
	console.error(chalk.red("An error occurred:"), error);
	process.exit(1);
});
