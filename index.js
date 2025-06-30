#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import degit from "degit";

const GITHUB_REPO = "ohk-soe-htet/react-templates";

const tsTemplates = ["vanilla", "redux"];
const extendedTemplates = ["full", "redux"];

async function run() {
	console.log(chalk.blue("Creating a new React app..."));

	const args = process.argv.slice(2);
	let projectName = null;
	let chosenTemplate = null;

	// --- Flag Handling ---
	const findFlag = (flag) => args.findIndex((arg) => arg === flag);
	const defaultFlagIndex = findFlag("--default");
	const tsFlagIndex = findFlag("--ts");
	const extendedFlagIndex = findFlag("--extended");

	if (defaultFlagIndex !== -1) {
		chosenTemplate = "vanilla";
		projectName = args.filter((arg) => !arg.startsWith("--"))[0];
	} else {
		const handleFlag = (flagIndex, category) => {
			if (flagIndex !== -1 && args[flagIndex + 1]) {
				const templateName = args[flagIndex + 1];
				chosenTemplate = path.posix.join(category, templateName);
				projectName = args.filter(
					(_, i) => i !== flagIndex && i !== flagIndex + 1
				)[0];
				return true;
			}
			return false;
		};

		if (
			!handleFlag(tsFlagIndex, "ts") &&
			!handleFlag(extendedFlagIndex, "extended")
		) {
			if (args.length > 0 && !args[0].startsWith("--")) {
				projectName = args[0];
			}
		}
	}

	// --- Project Name and Help ---
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
				"--default"
			)}              Use the default vanilla template.`
		);
		console.log(
			`  ${chalk.cyan(
				"--ts <template>"
			)}         Use a TypeScript template.`
		);
		console.log(
			`  ${chalk.cyan(
				"--extended <template>"
			)}  Use an extended template with more features.`
		);
		console.log();
		console.log("For example:");
		console.log(
			`  ${chalk.cyan("npx @ohk/react-template")} ${chalk.green(
				"my-app"
			)} --ts vanilla`
		);
		process.exit(1);
	}

	const targetDir = path.resolve(process.cwd(), projectName);
	if (fs.existsSync(targetDir)) {
		console.error(chalk.red(`Directory ${projectName} already exists.`));
		process.exit(1);
	}

	// --- Interactive Mode ---
	if (!chosenTemplate) {
		const { useDefault } = await inquirer.prompt([
			{
				type: "confirm",
				name: "useDefault",
				message: "Would you like to use the default vanilla template?",
				default: true,
			},
		]);

		if (useDefault) {
			chosenTemplate = "vanilla";
		} else {
			const { templateCategory } = await inquirer.prompt([
				{
					type: "list",
					name: "templateCategory",
					message: "Which type of template would you like?",
					choices: ["ts", "extended"],
					loop: false,
				},
			]);

			let templateChoices;
			if (templateCategory === "ts") {
				templateChoices = tsTemplates;
			} else {
				templateChoices = extendedTemplates;
			}

			const { selectedTemplate } = await inquirer.prompt([
				{
					type: "list",
					name: "selectedTemplate",
					message: "Which template would you like to use?",
					choices: templateChoices,
					loop: false,
				},
			]);
			chosenTemplate = path.posix.join(
				templateCategory,
				selectedTemplate
			);
		}
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
	console.log(chalk.cyan("  npm run dev"));
	console.log("    Starts the development server.");
	console.log();
	console.log("To get started, run the following commands:");
	console.log();
	console.log(chalk.cyan("  cd"), projectName);
	console.log(`  ${chalk.cyan("npm install")}`);
	console.log(`  ${chalk.cyan("code .")}`);
	console.log();
	process.exit(0);
}

run().catch((error) => {
	console.error(chalk.red("An error occurred:"), error);
	process.exit(1);
});
