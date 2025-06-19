import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

// ✅ Load environment variables
dotenv.config({
  path: "./.env"
});

// ✅ Start the app after DB connects
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at port: ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("❌ App error:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed:", err);
  });
