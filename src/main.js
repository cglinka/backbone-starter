(function () {
  /* TODO: WRITE CODE HERE */

  var product = new Product({
    name: 'A PRODUCT NAME',
    price: 10.99
  });

  var productView = new ProductView({
    model: product
  });

  productView.render();

  console.log('productView.el', productView.el);
  $("#store").append(productView.el);
})();
