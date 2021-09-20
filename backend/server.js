import dotenv from "dotenv";
import express from "express";
import { Client } from "pg";
import usersRoutes from './routes/users-routes'
import clientsProfilesRoutes from './routes/clients-profiles-routes'
import workersProfilesRoutes from './routes/workers-profiles-routes'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/users", usersRoutes);
app.use("/api/profiles", clientsProfilesRoutes);
app.use("/api/profiles", workersProfilesRoutes);


const password = process.env.PASSWORD

 const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'housework_helper_app',
  password: password,
  port: 5432,
  });

  global.client = client;

  client
  .connect()
  .then(() => {
    console.log("database connected!");
  })


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

export default app;