import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';


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
  itemsData,
  foodData: alias('model'),

  actions: {
    fooditems(type) {
      let filterData;
      if (type === 'breakfast') {
        filterData = this.model.filter((obj) => {
          return obj.catergory === '1';
        });
      } else if (type === 'lunch') {
        filterData = this.model.filterBy('catergory' === '2');
      } else {
        filterData = this.model.filterBy('catergory' === '3');
      }
      this.set('foodData', filterData);
    },
  },
});
