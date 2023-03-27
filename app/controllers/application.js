import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import { inject  as service } from '@ember/service';

export default Controller.extend({
  router: service(),

  canShowSidebar: computed('router', function() {
    return this.router.currentRouteName !== 'index';
  })

});
