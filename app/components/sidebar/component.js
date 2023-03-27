import Component from '@ember/component';
import { inject as  service } from '@ember/service';

let NavbarMenu = [{
  label: 'Home',
  route: 'home',
  icon: 'home'
}, {
  label: 'Orders',
  route: 'home',
  icon: 'home'
}, {
  label: 'Reports',
  route: 'home',
  icon: 'home'
}]

export default Component.extend({
  router : service(),
  NavbarMenu,
});