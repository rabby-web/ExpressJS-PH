import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

// http://localhost:3000/10/21
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello Express Project");
// });

// http://localhost:3000?email=mezba@gmail.com&name=rabby
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello Express Project");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data",
  });
});

export default app;
