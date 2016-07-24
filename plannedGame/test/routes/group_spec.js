import assert from 'assert';
import http from 'http';
import sinon from 'sinon';

import '../../src/index.js';

describe('group route', () => {
  describe('get', () => {
    it('returns 200', done => {
      http.get('http://127.0.0.1:3000/group', res => {
        assert.equal(200, res.statusCode);
        res.on('data', data => {
          assert.equal(data, sinon.match.array);
        });

        done();
      });
    });
  });

  describe('get by id', () => {
    it('returns 200', done => {
      http.get('http://127.0.0.1:3000/group/1', res => {
        assert.equal(200, res.statusCode);
        res.on('data', data => {
          assert.equal(data, sinon.match.object);
        });

        done();
      });
    });
  });
});
