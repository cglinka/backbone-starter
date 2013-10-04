(function () {

  var stockTemplateHtml = $('#templates .stock').html();
  var stockTemplate = _.template(stockTemplateHtml);

  window.StockView = Backbone.View.extend({
    className: 'stock',

    initialize: function (options) {
      this.listenTo(this.model, 'change:price', this.render);
    },

    render: function () {
      // console.log('this.model.get name', this.model.get('name'));
      // console.log('ths.model.get price', this.model.get('price'));

      var newHtml = stockTemplate({ name: this.model.get('name'), price: this.model.get('price') });
      $(this.el).html(newHtml);
      // console.log(newHtml);
      // console.log(this.el)
    }
  });

})();
