const fs = require("fs");

const products = JSON.parse(fs.readFileSync("../data/product.json"));
const users = JSON.parse(fs.readFileSync("../data/users.json"));
const posts = JSON.parse(fs.readFileSync("../data/posts.json"));
const carts = JSON.parse(fs.readFileSync("../data/carts.json"));

const db = {
  products: products.products || products,
  users: users.users || users,
  posts: posts.posts || posts,
  carts: carts.carts || carts
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

console.log("db.json creado correctamente");