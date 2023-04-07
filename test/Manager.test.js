const Manager = require('../lib/manager');

const manager = new Manager('Brook', 1, 'Brook@test.com', 101);
describe('Manager class', () => {
  test('gets the name', () => {  
    expect(manager.getName()).toBe('Brook');
  });
  
  test('gets the id', () => {
    expect(manager.getId()).toBe(1);
  });

  test('gets the Email', () => {
    expect(manager.getEmail()).toBe('Brook@test.com');
  });

  test('gets the office number', () => {
    expect(manager.getOfficeNumber()).toBe(101);
  });

  test('gets the role', () => {
    expect(manager.getRole()).toBe('Manager');
  });
});