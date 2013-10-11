(function () {

  window.ProductView = Backbone.View.extend({
    className: 'product',

    // Fetch the product template from index.html
    template: _.getTemplate('product'),

    // Add model information to the view's div.
    render: function () {
      var newProductHtml = this.template( this.model.toJSON() );
      $(this.el).html(newProductHtml);
    }
  });

})();
