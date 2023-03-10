import Service from '@ember/service';
import { A } from '@ember/array';
export default class ShoppingCartService extends Service {
  items = A([]);

  addItem(item) {
    this.items.pushObject(item);
  }

  remove(item) {
    this.items.removeObject(item);
  }

  empty() {
    this.items.clear();
  }
  removeDuplicates(items) {
    return [...new Set(items)];
  }
}
