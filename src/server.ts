import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.DB_url!);
    app.listen(config.port, () => {
      console.log("All Ok");
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));
