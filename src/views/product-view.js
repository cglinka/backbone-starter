(function () {

  window.ProductView = Backbone.View.extend({
    // initialize: function (options) {
    //   this.bar = 'init val';
    // }

    render: function () {
      $(this.el).hmtl( this.model.get('name') );
    }
  });

})();
