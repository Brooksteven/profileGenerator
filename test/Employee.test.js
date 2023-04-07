const Employee = require('../lib/employee');

const employee = new Employee('Brook', 1, 'Brook@test.com');
describe('Employee class', () => {
    test('gets the name', () => {
        expect(employee.getName()).toEqual('Brook')
    });
    test('gets the id', () => {
        expect(employee.getId()).toEqual(1);
    });
    test('gets the email', () => {
        expect(employee.getEmail()).toEqual('Brook@test.com');
    });
    test('gets the role', () => {
        expect(employee.getRole()).toEqual('Employee');
    });
});