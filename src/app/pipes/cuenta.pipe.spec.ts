import { CuentaPipe } from './cuenta.pipe';

describe('CuentaPipe', () => {
  it('create an instance', () => {
    const pipe = new CuentaPipe();
    expect(pipe).toBeTruthy();
  });
});
