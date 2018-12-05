import Currency from '@/filters/Currency';

describe('Currency.js', () => {
  it('return correct content', () => {
    const input = 10.05;
    expect(Currency(input)).toMatch('$ 10.05');
  });
});
