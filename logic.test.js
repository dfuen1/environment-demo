
const sum = require('./logic');

test('Adding 2 and 2 will equal 4', () => {
    //what are we expect the result to be with these arguments
    expect(sum(2, 2)).toBe(4);
});