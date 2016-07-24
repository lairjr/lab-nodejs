import assert from 'assert';
import http from 'http';
import sinon from 'sinon';

import '../../src/index.js';

const BASE_URL = 'http://127.0.0.1:3000/game';

describe('game route', () => {
  describe('get', () => {
    it('returns 200', done => {
      http.get(BASE_URL + '/1', res => {
        assert.equal(200, res.statusCode);
        res.on('data', data => {
          assert.equal(data, sinon.match.array);
        });

        done();
      });
    });
  });
});
