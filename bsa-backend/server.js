import dotenv from "dotenv";
import connectDB from "./config/db.js";
import seedAdmin from "./seeder/seedAdmin.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5002;

connectDB(process.env.MONGO_URI)
  .then(async () => {
    if (process.env.NODE_ENV === "development") {
      await seedAdmin();
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

