(function () {
  /* TODO: WRITE CODE HERE */

  var product = new Product({
    name: 'A PRODUCT NAME'
  });

  var productView = new ProductView({
    model: product
  });

  productView.render();

  console.log('productView.el', productView.el);
})();
