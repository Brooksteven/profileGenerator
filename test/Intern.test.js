const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('gets Intern school', () => {
    const data = {
        name: "Brooklynn",
        id: 1,
        email: "Brooksteven54@gmail.com",
        school: 'Georgia Tech'
    };
    const intern = new Intern(data);

    expect(intern.school).toBe('Georgia Tech');
});

test('gets Intern role', () => {
    const data = {
        name: "Brooklynn",
        id: 1,
        email: "Brooksteven54@gmail.com",
        school: 'Georgia Tech'
    };
    const intern = new Intern(data);

    expect(intern.role).toBe('Intern');
});