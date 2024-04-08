const express = require("express");
const cors = require("cors");
const { ServerApiVersion, ObjectId, MongoClient } = require("mongodb");
const app = express();

const corsOrigin = {
  origin: ["http://localhost:5173/", "192.168.1.212:5173s"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOrigin));
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 8000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p1jrtk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // Mongodb folder and file add or contion part
    const usersCollection = client
      .db("universityInstructorBackend")
      .collection("userUnI");
    const CourseScheduleColl = client
      .db("universityInstructorBackend")
      .collection("CourseSchedule");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.post("/courseSchedule", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/users", async (req, res) => {
      const query = {};
      const users = await usersCollection.find(query).toArray();
      res.send(users);
    });
    app.get("/courseSchedule", async (req, res) => {
      const query = {};
      const users = await CourseScheduleColl.find(query).toArray();
      res.send(users);
    });
  } finally {
  }
}
run().catch(console.log());

app.get("/", async (req, res) => {
  res.send("University sInstructor Backend is  runnig");
});
app.listen(port, () =>
  console.log(`University Instructor Backend runnig ${port}`)
);
