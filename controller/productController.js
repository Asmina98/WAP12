const productController = (req, res, next) => {
    console.log(req.body); // { title: 'book' }
    res.redirect("/");
  }

const addProduct = (req, res, next) => {

}

module.exports = {
    productController,
    addProduct
}