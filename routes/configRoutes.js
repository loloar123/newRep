const indexR = require("./index");
const usersR = require("./users");
const ordersR = require("./orders");
const categoriesR = require("./categories");
const productsR = require("./products");
const uploadsR = require("./uploads");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/orders",ordersR);
  app.use("/categories",categoriesR);
  app.use("/products",productsR);
  app.use("/uploads",uploadsR);
}
