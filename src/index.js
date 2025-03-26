
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
  path:'./.env'}
);

connectDB().then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000 , () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    }}`);
  })

  app.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  
  ;
}).catch((err) => {
  console.log(err);
});