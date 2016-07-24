import group from '../../src/controllers/group';

import assert from 'assert';
import sinon from 'sinon';

describe('group controller', () => {
  const res = {
    json: sinon.spy()
  };

  describe('get', () => {
    it('returns group list', done => {
      group.get({}, res);
      assert(res.json.calledWith(sinon.match.array));

      done();
    });
  });
});
