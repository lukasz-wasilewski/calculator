function calc(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case 'x':
      return a * b;
    default:
      throw Error('unknown operation');
  }
}

module.exports = {
  calc,
};
