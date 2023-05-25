# Calculator App

Calculator App is a UI application that allows the user to perform basic arithmetic operations, random string generation, and view the records of the previous calculations.

This application is built using `Vue.js` and `Typescript`.

## Demo

![Demo](./imgs/demo.gif)

## How to get working from the source code

You will need:

- Node.js - for compiling the source code and running the application it comes with `npm` package manager follow the instructions on <https://nodejs.org/en/download>
- Git - for cloning the repository <https://git-scm.com/downloads>
- Browser - for running the application

> Note: The application depends on the [Calculation Service](https://github.com/masterkeysrd/calculation-service) to perform the calculations and store the records. To get the application working you will need to setup the Calculation Service first.

### Steps to setup the local environment

#### 1. Clone the repository

```bash
git clone git@github.com:masterkeysrd/calculator-ui.git
```

or if you are using `https`:

```bash
git clone https://github.com/masterkeysrd/calculator-ui.git
```

#### 2. Install the dependencies

```bash
cd calculator-ui
npm install
```

#### 3. Configure the environment variables

Copy the `.env.example` file and rename it to `.env.local` and set the values of the variables.

```bash
cp .env.example .env.local
```

#### 4. Run the application

```bash
npm run dev
```

#### 5. Open the browser

Open the browser and go to <http://localhost:5174/>
