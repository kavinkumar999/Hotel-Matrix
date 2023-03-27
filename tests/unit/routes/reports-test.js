import { module, test } from 'qunit';
import { setupTest } from 'foodie/tests/helpers';

module('Unit | Route | reports', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reports');
    assert.ok(route);
  });
});
