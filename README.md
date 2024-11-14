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

```
