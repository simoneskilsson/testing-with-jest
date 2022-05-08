const stack = require('../src/stack');

test('checks if there is a "mon" in Simon', () => {
    stack.push("Simon");
    expect('Simon').toMatch(/mon/);
  });
  
test('makes sure there is no P in Eskilsson', () => {
    stack.push("Eskilsson");
    expect(stack.peek()).not.toMatch(/P/);
  });