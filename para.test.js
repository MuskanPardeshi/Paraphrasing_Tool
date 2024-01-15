const { para1 } = require('./para');

test('para1 function should return a paraphrased sentence', async () => {
  const key1 = 'Test sentence';
  const key2 = 'Professional';

  const result = await para1(key1, key2);

  expect(result).toBeDefined();
});

test('para1 function should handle empty key1 or key2', async () => {
    const key1 = '';
    const key2 = 'Professional';
  
    const result = await para1(key1, key2);
  
    expect(result).toBeUndefined();
  });

 

// const { para1 } = require('./para');

// test('Check for professional', async () => {
//   const result = await para1('my name is jhon', 'professional');
//   expect(result).toBe('My name is Jhon.');
// });

