import express from "express";
import { readFile, writeFile } from "fs/promises";
const app = express();
const port = 5000;

app.use(express.json());//body parser
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.post("/contact", async (req, res) => {
  try {
    let filedata = await readFile("data.json");
    filedata = JSON.parse(filedata);
    const found = filedata.find((ele) => ele.email == req.body.email);
    if (found)
      return res.status(400).json({ error: "Email address already exists" });
    filedata.push(req.body);
    await writeFile("data.json", JSON.stringify(filedata));
    res.status(200).json({ success: "Your form has been submitted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal server error.Try again" });
  }
});
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
