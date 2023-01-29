import Component from '@ember/component';
import { computed, set } from '@ember/object';

export default Component.extend({
  init() {
    let subTotal = 0;
    let delivery = 25;
    this._super(...arguments);
    this.foodItems.map((obj) => {
      obj.count = 1;
      subTotal = subTotal + Number(obj.price);
      return obj;
    });
    this.set('subTotal', subTotal);
  },
  total: computed('subTotal', function() {
   return this.subTotal + 25;
  }),
  actions: {
    closeFlyout() {
      this.attrs.closeFlyout();
    },
    clearData() {
      //clear the data
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
    }
  }
});