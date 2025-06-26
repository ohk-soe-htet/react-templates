# React Templates

This is a collection of React templates that you can use as a starting point for your own projects. Each template is designed to be easy to customize and extend, and includes all the basic files and structure you need to get started with a new React app.

## Stripped-Down Templates

If you're looking for a lightweight and efficient way to get started with a new React project, then you've come to the right place! This repository provides a collection of stripped-down React templates that include only the essential files and dependencies needed to get up and running quickly. By removing the unnecessary files and features, these templates are cleaner, leaner, and faster than many of the other options available, and have been designed to be easy to customize and extend to fit your specific needs.

## Getting Started

To use one of these templates, simply clone this repo and copy the template you want to use to a new directory. Then, install the necessary dependencies with your preferred package manager.

## React Templates CLI

This is a command-line tool to quickly scaffold a new React project from a collection of curated templates.

### Features

-   **Interactive Mode:** An easy-to-use interactive prompt to guide you through selecting a template.
-   **Direct Mode:** Specify a template directly with flags for faster setup.
-   **Always Up-to-Date:** Templates are fetched directly from the GitHub repository, so you always get the latest version.
-   **Variety of Templates:** Includes templates for Create React App and Vite, with and without TypeScript, as well as more advanced setups with Redux.

### Usage

To create a new project, run the following command in your terminal:

```bash
npx @ohk/react-template <project-name>
```

This will start an interactive prompt where you can choose a category and then a specific template.

#### Direct Usage with Flags

If you already know which template you want to use, you can specify it directly with a flag.

**For basic templates:**

```bash
npx @ohk/react-template <project-name> --basic <template-name>
```

**For expansion templates:**

```bash
npx @ohk/react-template <project-name> --expansions <template-name>
```

**Example:**

```bash
npx @ohk/react-template my-app --basic cra
```

## Available Templates

### Basic

-   `cra`: Create React App with JavaScript
-   `cra-ts`: Create React App with TypeScript
-   `cra_lint`: Create React App with JavaScript and ESLint
-   `vite`: Vite with JavaScript
-   `vite-ts`: Vite with TypeScript

### Expansions

-   `cra_full`: Create React App with JavaScript, Redux, and React Router
-   `cra_redux`: Create React App with JavaScript and Redux
-   `cra-ts_redux`: Create React App with TypeScript and Redux

## Contributing

If you'd like to contribute to this project, feel free to open a pull request with your changes. Please make sure that your changes are well-documented and that they follow the same code style and conventions as the existing code.

## Maintenance and Updates

I regularly update the packages used in these templates to their latest versions to ensure that they are using the most stable and up-to-date versions available. Additionally, I add new templates to the repository when reliable and useful technologies are developed.

I'm committed to improving the quality and performance of these templates, and I'm always looking for ways to optimize the code and make it more efficient. If you encounter any issues with these templates or have suggestions for improvements, feel free to open an issue on this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   The React team for creating such an amazing library!
-   The contributors to the various packages and tools used in this project.
