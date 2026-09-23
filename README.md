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