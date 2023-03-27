import EmberRouter from '@ember/routing/router';
import config from 'foodie/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('orders');
  this.route('reports');
});
