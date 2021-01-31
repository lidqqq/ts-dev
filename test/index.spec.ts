import { mod } from '@/mod';
import { deepStrictEqual } from 'assert';

describe('mocha with TypeScript', function () {
  it('test', function () {
    deepStrictEqual(mod, 42);
  });
});
