
import app from "./app";
import AppDataSource  from "./db";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import specs from "./swagger/swagger";



app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


dotenv.config();
const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("DB connect");
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error(error);
  }
}

main();