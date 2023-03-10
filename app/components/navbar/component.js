import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  shoppingCart: service(),
  isOpen: false,
  orderCount: computed('shoppingCart.items.[]', function() {
    return this.shoppingCart.items.length;
  }),

  actions: {
    toggleFlyout() {
      this.toggleProperty('isOpen');
    },
  },
});
