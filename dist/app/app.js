"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// http://localhost:3000/10/21
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send("Hello Express Project");
// });
// http://localhost:3000?email=mezba@gmail.com&name=rabby
app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Express Project");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully received data",
    });
});
exports.default = app;
