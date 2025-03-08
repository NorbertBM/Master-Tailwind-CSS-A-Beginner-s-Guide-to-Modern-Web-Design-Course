# Setting up Tailwind CSS V3 using the CLI

## Create a new project directory

Create a new directory for your project and navigate into it.

```bash
mkdir projects
cd projects
```

## Initialize a new project

Initialize a new project using npm.

```bash
npm init -y
```

## Install Tailwind CSS CLI

Install the Tailwind CSS CLI tool as a development dependency.

```bash
npm install -D tailwindcss@3
# or
npm install tailwindcss-cli@latest --save-dev
```

## Create a Tailwind configuration file

Create a new Tailwind configuration file using the CLI tool.

```bash
npx tailwindcss-cli@latest init
```

## Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```js
module.exports = {
  content: ["src/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Create a CSS file to include Tailwind

Create a new CSS file in your project directory and include Tailwind’s base styles.

```css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the Tailwind CLI build process (run each time to start the server)

Run the CLI tool to scan your template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## Start using Tailwind in your HTML

Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link href="output.css" rel="stylesheet" />
  </head>
  <body>
    <div class="p-4 bg-gray-100">Projects</div>
  </body>
</html>
```
