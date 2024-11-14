```js
// Step 1: Initialize a new Node.js project
npm init -y

// Step 2: Install Express
yarn add express

// Step 3: Install TypeScript as a development dependency
yarn add -D typescript

// Step 4: Initialize TypeScript configuration (tsconfig.json)
tsc --init


"rootDir": "./src", // Directory for TypeScript source files
"outDir": "./dist", // Directory for compiled JavaScript files

// Step 5: Install Node.js and Express type definitions for TypeScript
yarn add -D @types/node
yarn add -D @types/express

// Compile TypeScript files once
tsc
// Compile TypeScript files in watch mode (automatically recompile on changes)
tsc -w

// for real runtime
yarn add -D nodemon
tsc -w

"scripts": {
    "start:dev": "nodemon ./dist/app/server.js",
  },

yarn start:dev

```

```js
// app.ts
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express JS");
});

export default app;

// server.ts
import { Server } from "http";
import app from "./app";
const PORT = 3000;

let server: Server;

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}
bootstrap();
```
