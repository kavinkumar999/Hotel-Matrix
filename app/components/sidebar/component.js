import Component from '@ember/component';
import { inject as  service } from '@ember/service';

let NavbarMenu = [{
  label: 'Home',
  route: 'home',
  currentWhen: 'home',
  icon: 'home'
}, {
  label: 'Orders',
  route: 'orders',
  currentWhen: 'orders',
  icon: 'home'
}, {
  label: 'Reports',
  route: 'reports',
  currentWhen: 'reports',
  icon: 'home'
}]

export default Component.extend({
  router : service(),
  NavbarMenu,
});