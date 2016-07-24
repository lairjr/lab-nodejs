import assert from 'assert';
import sinon from 'sinon';

import group from '../../src/controllers/group';

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

  describe('getById', () => {
    it('returns a group', done => {
      const req = {
        params: {
          groupid: 12
        }
      };
      group.getById(req, res);
      assert(res.json.calledWith(sinon.match.object));

      done();
    });
  });
});
