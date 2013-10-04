(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      // console.log('Updating', this.get('name'), 'price to:', newPrice);
      // TODO
      var numPrice = parseFloat(newPrice);
      this.set({ price: numPrice});
      // console.log('num price?', this.get('price'))
    }
  });

})();
