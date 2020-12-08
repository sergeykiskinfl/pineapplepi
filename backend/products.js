const { db } = require("./util/admin");

// Get all products from the base
exports.getAllProducts = async (req, res) => {
  try {
    let products = [];
    let data = await db.collection("products").get();
    data.forEach(doc => {
      products.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        imageUrl: doc.data().imageUrl,
        price: doc.data().price,
        specification: doc.data().specification
      });
    });

    return res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};

// Get a product from the base
exports.getProduct = async (req, res) => {
  
  try {
    let productData ={};
    let doc = await db.doc(`/products/${req.params.id}`).get();

    if(!doc.exists) {
      return res.status(404).json({error: "Product not found"});
    }

    productData = doc.data();
    productData.id = doc.id;

    return res.json(productData);

  } catch (err) {
    console.error(err)
    return res.status(500).json({error: err.code})
  }
};
