import assert from 'assert';
import sinon from 'sinon';

import game from '../../src/controllers/game';

describe('game controller', () => {
  const res = {
    json: sinon.spy()
  };

  describe('get', () => {
    it('returns game list', done => {
      const req = {
        params: {
          groupid: 1
        }
      };
      game.getByGroupId(req, res);
      assert(res.json.calledWith(sinon.match.array));

      done();
    });
  });
});
