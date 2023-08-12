import express from "express";
import path from "path";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));


server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS is <em>cool</em>!",
  });
});
const PORT=8080;
server.listen(PORT, "0.0.0.0", () => {
  console.info(
    "Express server  is listening at http://0.0.0.0:${PORT}",
  );
});
