
const superHeroes = [
    {
        id: 1,
        name: 'FLash',
    },
    {
        id: 2,
        name: 'Arrow',
    },
    {
        id: 3,
        name: 'Black Canary',
    },
    {
        id: 4,
        name: 'Superman',
    },
    {
        id: 5,
        name: 'Batman',
    },
];
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name  = 'Green lantern';

console.table(superHeroes);
console.table(superHeroesCopy);
