(function () {

  window.ProductView = Backbone.View.extend({
    // initialize: function (options) {
    //   this.bar = 'init val';
    // }
    template: _.getTemplate('product'),

    render: function () {
      var newProductHtml = this.template( this.model.toJSON() );
      $(this.el).html(newProductHtml);
    }
  });

})();
