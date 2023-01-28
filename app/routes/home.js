import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    let response = await fetch('/api/food.json');
    let parsed = await response.json();
    return parsed;
  },
});
