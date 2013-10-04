(function () {

  var stockTemplateHtml = $('#templates .stocks').html();
  var stockTemplate = _.template(stockTemplateHtml);

  window.StockView = Backbone.View.extend({
    className: 'stock',

    initialize: function (options) {
      this.listenTo(this.model, 'change:price', this.onPriceChange);
    },

    onPriceChange: function () {
      this.render();
    },

    render: function () {
      console.log('render running');
      console.log('this.model name', this.model.get('name'));
      console.log('ths.model price', this.model.get('price'));

      $(this.el).empty();
      var newHtml = stockTemplate({
        name: this.model.get('name'),
        price: this.model.get('price')});
      $(this.el).html(newHtml);
    }
  });

})();
