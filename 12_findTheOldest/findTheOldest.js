const people = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const findTheOldest = (arr) => {
    //

    arr.sort((a, b) => {
        const first = getAge(a.yearOfBirth, a.yearOfDeath);
        const next = getAge(b.yearOfBirth, b.yearOfDeath);
        return first > next ? -1 : 1;
    });

    return arr[0];
};

function getAge(born, dead) {
    if (!dead) {
        dead = new Date().getFullYear();
    }
    return dead - born;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
