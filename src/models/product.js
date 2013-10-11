(function () {

  // Model
  window.Product = Backbone.Model.extend({
    // defaults: {
    //   foo: 'default val'
    // }
  });

  // Collection
  window.Inventory = Backbone.Collection.extend({
    model: Product,

  })

})();
