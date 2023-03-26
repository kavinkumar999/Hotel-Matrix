import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const itemsData = [
  {
    name: 'Chicken',
    node: 'chicken',
  },
  {
    name: 'Fish',
    node: 'fish',
  },
  {
    name: 'Rice',
    node: 'rice',
  },
  {
    name: 'Fruits',
    node: 'fruits',
  },
  {
    name: 'Drinks',
    node: 'drinks',
  },
  {
    name: 'Noodles',
    node: 'noodles',
  },
];

export default Controller.extend({
  shoppingCart: service(),
  login: false,
  orderCount: 0,
  itemsData,
  foodData: computed('model', {
    get() {
      return this.model.filterBy('catergory', 'chicken');
    },
    set(key, value) {
      return value;
    },
  }),
  cartItem: {},

  actions: {
    AddToCart(item) {
      this.shoppingCart.addItem(item);
      let numberOfItems = Object.keys(this.shoppingCart.items).length;
      this.set('orderCount', numberOfItems);
    },

    foodItemsType(type) {
      let filterData = this.model.filter((obj) => {
        return obj.catergory === type;
      });
      this.set('foodData', filterData);
    },
  },
});
