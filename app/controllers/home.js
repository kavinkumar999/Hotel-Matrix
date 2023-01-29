import Controller from '@ember/controller';
import { oneWay } from '@ember/object/computed';


const itemsData = [{
  name: 'Chicken',
  image: 'chicken'
}, {
  name: 'Fish',
  image: 'fish'
}, {
  name: 'Rice',
  image: 'rice'
}, {
  name: 'Fruits',
  image: 'fruits'
}, {
  name: 'Drinks',
  image: 'drinks'
}, {
  name: 'Noodles',
  image: 'noodles'
}]

export default Controller.extend({
  login: false,
  orderCount: 0,
  itemsData,
  foodData: oneWay('model'),
  cartItem: {},

  actions: {
    AddToCart(item) {
      this.cartItem[item.id] = item;
      let numberOfItems =  Object.keys(this.cartItem).length
      this.set('orderCount', numberOfItems);
    },
    
    fooditems(type) {
      let filterData = this.model.filter((obj) => {
        return obj.catergory === type;
      });
      this.set('foodData', filterData);
    },
  },
});
