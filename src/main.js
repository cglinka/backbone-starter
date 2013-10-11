(function () {
  /* TODO: WRITE CODE HERE */

  // var product = new Product({
  //   name: 'A PRODUCT NAME',
  //   price: 10.99
  // });

  // var productView = new ProductView({
  //   model: product
  // });

  // productView.render();

  // console.log('productView.el', productView.el);
  // $("#store").append(productView.el);

  var inventory = new Inventory({});
  var storeView = new StoreView({
    collection: inventory,
    el: '#store'
  });

  inventory.add([
    {name: 'Fancy Hat', price: 14.99},
    {name: 'Boring Hat', price: 10.80},
    {name: 'Fun Hat', price: 5.50}
    ]);
})();
