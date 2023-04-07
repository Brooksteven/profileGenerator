
const Engineer = require('../lib/engineer');

const engineer = new Engineer('Brook', 2, 'Brook@test.com', 'Brooksteven');
describe('Engineer class', () => {
  test('gets the name', () => {
    expect(engineer.getName()).toBe('Brook');
  });
  
  test('gets the id', () => {
    expect(engineer.getId()).toBe(2);
  });

  test('gets the Email', () => {
    expect(engineer.getEmail()).toBe('Brook@test.com');
  });

  test('gets the gitHub account', () => {
    expect(engineer.getGitHub()).toBe('Brooksteven');
  });

  test('gets the role', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});