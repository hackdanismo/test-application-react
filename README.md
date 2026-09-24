# React Test Application
Test application built using: `Vite`, `React`, `Tailwind` and `TypeScript`.

## Run the Application
Run the application using `npm` once the repository has been cloned from `GitHub`:

```shell
$ # Clone using HTTPS
$ git clone https://github.com/hackdanismo/test-application-react.git
# Clone using SSH
$ git clone git@github.com:hackdanismo/test-application-react.git

# Change directory into the react-test-application project
$ cd test-application-react

# Optionally install the recommended Node version using nvm
$ nvm install
# Optionally use the recommended Node version using nvm
$ nvm use

# Install the packages and dependencies listed in the package.json file
$ npm install
# Run the application
$ npm run dev
```

The application should run here: [http://localhost:5173/](http://localhost:5173/).

## Screenshots
Cards:
<img width="1725" height="879" alt="Screenshot 2026-09-24 at 18 36 08" src="https://github.com/user-attachments/assets/515da840-2b6c-4c06-b03a-c721104092d9" />

Order screen:
<img width="1719" height="902" alt="Screenshot 2026-09-24 at 18 36 36" src="https://github.com/user-attachments/assets/884b1b8a-a8e2-4ba8-acc6-500daf82c910" />

Order confirmation:
<img width="1725" height="893" alt="Screenshot 2026-09-24 at 18 37 43" src="https://github.com/user-attachments/assets/6108d750-acd6-4e97-90d0-3e7ccd67caaa" />

## Component Library
We are using a `component library` built for this project and hosted on the `npm registry`. To install the `component-library-react` project in a `React` project using `TypeScript`:

```
$ npm install @hackdanismo/component-library-react
```

- [https://www.npmjs.com/package/@hackdanismo/component-library-react](https://www.npmjs.com/package/@hackdanismo/component-library-react)
- [https://github.com/hackdanismo/component-library-react](https://github.com/hackdanismo/component-library-react)

## Clone the Repository
To clone the repository:

```shell
# Clone using HTTPS
$ git clone https://github.com/hackdanismo/test-application-react.git
# Clone using SSH
$ git clone git@github.com:hackdanismo/test-application-react.git
```

## Set the Node version
It is recommended to run the application using the latest version of `Node`. For this, installing `NVM` is useful to manage and switch `Node` versions between projects: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

```shell
# Install nvm using cURL
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
# Install nvm using wget
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
```

The recommended `Node` version is specified inside of the `.nvmrc` file. Once install, use:

```shell
# Install the recommended Node version in the .nvmrc
$ nvm install
# Use the recommended Node version in the .nvmrc
$ nvm use
```

## Tailwind
The component library has `Tailwind` built-in. The inclusion of `Tailwind` in the application is completely optional.

```shell
$ npm install tailwindcss @tailwindcss/vite
```

Once installed, update the `vite.config.ts` file:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

Update the `src/index.css` stylesheet to import `Tailwind`:

```css
@import "tailwindcss";
```
