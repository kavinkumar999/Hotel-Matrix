import Component from '@ember/component';

export default Component.extend({

  actions: {
    login() {
      // login validation
    },
    close() {
      this.attrs.close();
    }
  }
});