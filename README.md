# Minimal React Templates

A collection of minimal and easy-to-use templates to kickstart your next React project. Get up and running in seconds with a clean, lightweight starting point.

## Usage

To create a new project, run the following command in your terminal:

```bash
npx @ohk/react-template <project-name>
```

This will launch an interactive prompt, asking if you'd like to use the default vanilla template. If you choose no, you can select from more advanced TypeScript and extended templates.

### Direct Usage

If you already know which template you want, you can specify it directly with a flag to skip the interactive prompts.

**For the default vanilla template:**

```bash
npx @ohk/react-template <project-name> --default
```

**For TypeScript templates:**

```bash
npx @ohk/react-template <project-name> --ts <template-name>
```

**For extended templates:**

```bash
npx @ohk/react-template <project-name> --extended <template-name>
```

## Available Templates

### Vanilla

The default template, providing a fast Vite setup with JavaScript.

-   `vanilla`

### TypeScript

-   `vanilla`: Vite with TypeScript configured.
-   `redux`: Create React App with TypeScript and Redux.

### Extended

-   `full`: Create React App with JavaScript, Redux, and React Router.
-   `redux`: Create React App with JavaScript and Redux.

## Contributing

Contributions are welcome. Please feel free to open a pull request or an issue if you have suggestions or find a bug. The templates are regularly updated to use the latest stable package versions.
