const app = require("./app"); // or './index' if your Express app is defined there
const { connectDb } = require("./config/db");

const PORT = process.env.PORT || 5454;

app.listen(PORT, async () => {
  await connectDb();
  console.log("ecommerce API listening on port:", PORT);
});
