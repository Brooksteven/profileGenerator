const Intern = require('../lib/intern');

const intern = new Intern('Brook', 3, 'Brook@test.com', 'GTU');
describe('Intern class', () => {
  test('gets the name', () => {
    expect(intern.getName()).toEqual('Brook');
  });
  
  test('gets the id', () => {
    expect(intern.getId()).toEqual(3);
  });

  test('gets the Email', () => {
    expect(intern.getEmail()).toEqual('Brook@test.com');
  });

  test('gets the school', () => {
    expect(intern.getSchool()).toEqual('GTU');
  });

  test('gets the role', () => {
    expect(intern.getRole()).toEqual('Intern');
  });
});