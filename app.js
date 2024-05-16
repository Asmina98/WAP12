const express = require("express");
const productRouter = require("./routes/product");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", productRouter);

app.get("/posts", (req, res) => {
  let data = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi",
    },
  ];
  res.status(200).send(data);
});
app.get("/foo", (req, res)=>{
  
  data = [
    {name: "lolo", age: 23}
  ]
  res.status(200).send(data);
});

app.post("/foot", (req, res)=>{
  console.log(req.body);
  res.json(req.body);
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("your server is running on port 3000..");
});
