(function () {
  /* TODO: ADD CODE HERE*/
  window.StoreView = Backbone.View.extend({
    initialize: function(options) {
      this.listenTo(this.collection, 'add', this.onProductAdd);
    },

    onProductAdd: function(newProduct) {
      // Create new instance of ProductView
      newProduct.view = new ProductView({
        model: newProduct
      });

      // Render the new view and add it to the element
      newProduct.view.render();
      $(this.el).append(newProduct.view.el)
    },
  });
})();