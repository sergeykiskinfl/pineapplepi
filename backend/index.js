const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");
const { getAllProducts, getProduct } = require("./products");

//Allow cross-origin
app.use(cors());
app.options("*", cors());

app.get("/products", getAllProducts);
app.get("/product/:id", getProduct);

exports.api = functions.region("europe-west1").https.onRequest(app);
