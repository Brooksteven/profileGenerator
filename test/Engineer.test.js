const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('gets Engineer GitHub username', () => {
    const data = {
        name: "Brooklynn",
        id: 1,
        email: "Brooksteven54@gmail.com",
        username: 'Brooksteven'
    };
    const engineer = new Engineer(data);

    expect(engineer.username).toBe('Brooksteven');
});

test('gets Engineer role', () => {
    const data = {
        name: "Brooklynn    ",
        id: 1,
        email: "Brooksteven54@gmail.com",
        username: 'Brooksteven'
    };
    const engineer = new Engineer(data);

    expect(engineer.role).toBe('Engineer');
});