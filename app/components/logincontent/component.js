import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notify: service(),

  actions: {
    login() {
      this.notify.success('Hello there!');
      // login validation
    },
    close() {
      this.attrs.close();
    }
  }
});