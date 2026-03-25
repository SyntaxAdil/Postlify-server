import app from "./src/app.js";
import connectDB from "./db/db.js";

connectDB();

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
