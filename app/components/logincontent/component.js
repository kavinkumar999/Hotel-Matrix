import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notify: service(),
  router: service(),
  email: '',
  password: '',

  actions: {
    login() {
      // login validation
      if (this.email === 'kavin' && this.password === 'kavin') {
        this.notify.success('Hurray!, Login success');
        this.router.transitionTo('home');
      } else {
        this.notify.warning('Invalid email or Password');
      }
    },
    close() {
      this.attrs.close();
    }
  }
});
