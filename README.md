# React Templates

A collection of curated, lightweight templates to quickly start your next React project. This repository provides a variety of starting points, from a basic Create React App setup to more advanced configurations with TypeScript and Redux.

## Usage

To create a new project, run the following command in your terminal:

```bash
npx @ohk/react-template <project-name>
```

This will launch an interactive prompt, allowing you to choose the perfect template for your needs.

### Direct Usage

If you already know which template you want, you can specify it directly with a flag to skip the interactive prompts.

**For basic templates:**

```bash
npx @ohk/react-template <project-name> --basic <template-name>
```

**For expansion templates:**

```bash
npx @ohk/react-template <project-name> --expansions <template-name>
```

## Available Templates

### Basic

-   `cra`: A clean Create React App with JavaScript.
-   `cra-ts`: Create React App with TypeScript configured.
-   `cra_lint`: Create React App with JavaScript and ESLint.
-   `vite`: A fast Vite setup with JavaScript.
-   `vite-ts`: Vite with TypeScript configured.

### Expansions

-   `cra_full`: Create React App with JavaScript, Redux, and React Router.
-   `cra_redux`: Create React App with JavaScript and Redux.
-   `cra-ts_redux`: Create React App with TypeScript and Redux.

## Contributing

Contributions are welcome. Please feel free to open a pull request or an issue if you have suggestions or find a bug. The templates are regularly updated to use the latest stable package versions.
