"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is create successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course is create successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// http://localhost:3000/10/21
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello Express Project");
// });
// http://localhost:3000?email=mezba@gmail.com&name=rabby
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.query);
    // res.send(something);
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
        // res.status(400).json({
        //   success: false,
        //   message: "failed to get data",
        // });
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully received data",
    });
});
// routes not found
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Routes not found",
    });
});
// global error handling
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
