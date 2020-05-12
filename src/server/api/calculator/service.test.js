const { calc } = require('./service');

describe('calculator operations works properly', () => {
  test('4 + 5 equal 9', () => {
    const result = calc(4, 5, '+');
    expect(result).toBe(9);
	});
	
	test('4 - 5 equal -1', () => {
    const result = calc(4, 5, '-');
    expect(result).toBe(-1);
	});
	
	test('25 / 5 equal 5', () => {
    const result = calc(25, 5, '/');
    expect(result).toBe(5);
	});
	
	test('5 x 5 equal 25', () => {
    const result = calc(5, 5, 'x');
    expect(result).toBe(25);
  });
});
