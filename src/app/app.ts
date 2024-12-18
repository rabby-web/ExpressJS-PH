import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is create successfully",
    data: user,
  });
});
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course is create successfully",
    data: course,
  });
});

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
app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.query);
    // res.send(something);
    try {
      res.send(something);
    } catch (error) {
      console.log(error);
      next(error);
      // res.status(400).json({
      //   success: false,
      //   message: "failed to get data",
      // });
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data",
  });
});

// routes not found
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Routes not found",
  });
});

// global error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;
