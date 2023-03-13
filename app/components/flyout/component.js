import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  shoppingCart: service(),

  delivery: computed('shoppingCart.items.[]', function () {
    return this.shoppingCart.items.length ? 25 : 0;
  }),

  subTotal: computed('shoppingCart.items.[]', function () {
    let subTotal = 0;
    this.shoppingCart.items.forEach((element) => {
      subTotal = subTotal + Number(element.price);
    });

    return subTotal;
  }),
  total: computed('subTotal', 'delivery', function () {
    return this.subTotal + this.delivery;
  }),
  foodCartItems: computed('shoppingCart.items.[]', function() {
    return this.shoppingCart.items
  }),
  actions: {
    closeFlyout() {
      this.attrs.closeFlyout();
    },
    clearData() {
      this.shoppingCart.empty();
    },
    removeItem(item) {
      this.shoppingCart.remove(item);
    },
    addQuantity(type) {
      let sub = this.subTotal + Number(type.price);
      set(type, 'count', type.count + 1);
      set(this, 'subTotal', sub);
    },
    minusQuantity(type) {
      if (Number(type.count) > 0) {
        let sub = this.subTotal - Number(type.price);
        set(type, 'count', type.count - 1);
        set(this, 'subTotal', sub);
      }
    },
  },
});
