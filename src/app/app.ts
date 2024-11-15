import express, { Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());


// http://localhost:3000/10/21
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello Express Project");
// });


// http://localhost:3000?email=mezba@gmail.com&name=rabby
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello Express Project");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data",
  });
});

export default app;
