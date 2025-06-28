const express = require("express");
const cors = require("cors");
const { connectDb } = require("./src/config/db"); // ✅ Adjust path if needed

const app = express();
app.use(express.json());
app.use(cors());

// Basic health route
app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to ecommerce api-node", status: true });
});

// Routes
const authRouters = require('./src/routes/auth.route.js');
const userRouters = require('./src/routes/user.route.js');
const productRouter = require('./src/routes/product.routes.js');
const adminProductRouter = require('./src/routes/adminproduct.route.js');
const cartRouter = require('./src/routes/cart.route.js');
const cartItemRouter = require('./src/routes/cartItem.route.js');
const orderRouter = require('./src/routes/order.routes.js');
const adminOrderRouter = require('./src/routes/adminorder.route.js');
const reviewRouter = require('./src/routes/review.routes.js');
const ratingRouter = require('./src/routes/review.routes.js');
const paymentRouter = require("./src/routes/payment.route.js");

// Use routes
app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/admin/orders", adminOrderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/payments", paymentRouter);

// Start the server
const PORT = process.env.PORT || 5454;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`🚀 Ecommerce API listening on port: ${PORT}`);
});
